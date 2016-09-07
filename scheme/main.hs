{-# LANGUAGE ExistentialQuantification #-}

-- module Scheme (LispVal (..), LispError (..), readExpr, eval, runIOThrows, primitiveBindings, liftThrows) where

import Control.Monad
import Control.Monad.Error
import Data.Array
import Data.Char
import Data.Complex
import Data.IORef
import Data.Maybe
import Data.Ratio
import Numeric
import System.Environment
import System.IO
import Text.ParserCombinators.Parsec hiding (spaces)

main :: IO ()
main = do
  args <- getArgs
  if null args
     then runRepl
     else runOne args

readOrThrow :: Parser a -> String -> ThrowsError a
readOrThrow parser input = case parse parser "lisp" input of
                             Left err  -> throwError $ Parser err
                             Right val -> return val

readExpr = readOrThrow parseExpr
readExprList = readOrThrow (endBy parseExpr spaces)

--
-- parsing
--

symbol :: Parser Char
symbol = oneOf "!$%&|*+-/:<=>?@^_~"

spaces :: Parser ()
spaces = skipMany1 space

data LispVal = Atom String
             | List [LispVal]
             | DottedList [LispVal] LispVal
             | Number Integer
             | String String
             | Bool Bool
             | PrimitiveFunc ([LispVal] -> ThrowsError LispVal)
             | Func { params :: [String], vararg :: (Maybe String)
                    , body :: [LispVal], closure :: Env }
             | IOFunc ([LispVal] -> IOThrowsError LispVal)
             | Port Handle
             | Char Char
             | Rational Rational
             | Float Double
             | Vector (Array Int LispVal)
             | Complex (Complex Double)

-- use >> if you're not returning a val
-- use >>= if you're passing a val immediately
-- use `do` otherwise

spaces1 :: Parser ()
spaces1 = skipMany1 space

parseEverything :: Parser LispVal
parseEverything = do
  char '(' >> spaces
  head <- sepEndBy parseExpr spaces1
  do
    char '.' >> spaces1
    tail <- parseExpr
    spaces >> char ')'
    return $ DottedList head tail
    <|> (spaces >> char ')' >> return (List head))

parseChar :: Parser LispVal
parseChar = do
  string "#\\"
  a <- many1 letter
  return $ case map toLower a of
             "newline" -> Char '\n'
             "space"   -> Char ' '
             [b]       -> Char b

escapedChar :: Parser Char
escapedChar = char '\\' >> oneOf "\"nrt\\" >>= \c ->
  return $ case c of
             '\\' -> '\\'
             'n'  -> '\n'
             'r'  -> '\r'
             't'  -> '\t'
          -- 'b' -> '\b'

parseString :: Parser LispVal
parseString = do
  char '"'
  a <- many (noneOf "\"" <|> escapedChar)
  char '"'
  return $ String a

-- an atom is a letter or symbol followed by any number of letters, symbols, or digits
-- first:rest is just cons, could be [first] ++ rest
-- return $ case atom of
-- "#t" -> Bool True
-- "#f" -> Bool False
-- _    -> Atom atom -- 'default'
parseAtom :: Parser LispVal
parseAtom = do
  first <- letter <|> symbol
  rest <- many (letter <|> digit <|> symbol)
  let atom = first:rest
  return $ Atom atom

parseBool :: Parser LispVal
parseBool = do
  char '#'
  (char 't' >> return (Bool True)) <|> (char 'f' >> return (Bool False))

parseNumber :: Parser LispVal
parseNumber = readPlainNumber <|> parseRadixNumber
--parseNumber = liftM (Number . read) $ many1 digit

toDecimal :: Integer -> String -> Integer
toDecimal base s = foldl1 ((+) . (* base)) $ map toNumber a
  where toNumber = toInteger . digitToInt

readPlainNumber :: Parser LispVal
readPlainNumber = do
  a <- many1 digit
  return $ Number . read $ a

readNumberInBase :: String -> Integer -> Parser LispVal
readNumberInBase digits base = do
  a <- many (oneOf digits)
  return $ Number $ toDecimal base a

parseExpr :: Parser LispVal
parseExpr = try parseBool
         <|> parseString
         <|> parseVector
         <|> parseAtom
         <|> parseChar
         <|> try parseComplexNumber
         <|> try parseFloat
         <|> try parseRationalNumber
         <|> parseNumber
         <|> parseQuoted
         <|> parseQuasiQuoted
         <|> parseUnQuote
         <|> parseEverything

-- parseExpr = parseAtom
-- <|> parseString
-- <|> parseNumber
-- <|> parseQuoted
-- <|> do char '('
-- x <- try parseList <|> parseDottedList
-- char ')'
-- return x

parseRationalNumber :: Parser LispVal
parseRationalNumber = do
  numerator <- many digit
  char '/'
  denominator <- many digit
  return $ Rational (read (numerator ++ "%" ++ denominator) :: Rational)

parseRadixNumber :: Parser LispVal
parseRadixNumber = char '#' >>
  ((char 'd' >> readPlainNumber)
    <|> (char 'b' >> readBinaryNumber)
    <|> (char 'o' >> readOctalNumber)
    <|> (char 'x' >> readHexNumber))

readBinaryNumber = readNumberInBase "01" 2
readOctalNumber  = readNumberInBase "01234567" 8
readHexNumber    = readNumberInBase "0123456789abcdefABCDEF" 16

parseComplexNumber :: Parser LispVal
parseComplexNumber = do
  realPart <- fmap toDouble $ try parseFloat <|> readPlainNumber
  sign <- char '+' <|> char '-'
  imaginaryPart <- fmap toDouble $ try parseFloat <|> readPlainNumber
  let signedImaginaryPart = case sign of
      '+' -> imaginaryPart
      '-' -> negate imaginaryPart
  char 'i'
  return $ Complex (realPart :+ signedImaginaryPart)
    where toDouble (Float x)  = x
          toDouble (Number x) = fromInteger x :: Double

parseVector :: Parser LispVal
parseVector = do
  string "#("
  els <- sepBy parseExpr spaces1
  char ')'
  return $ Vector (listArray (0, length els -1) els)

parseList :: Parser LispVal
parseList = liftM List $ sepBy parseExpr spaces

parseDottedList :: Parser LispVal
parseDottedList = do
  head <- endBy parseExpr spaces
  tail <- char '.' >> spaces >> parseExpr
  return $ DottedList head tail

parseQuoted :: Parser LispVal
parseQuoted = do
  char '\''
  a <- parseExpr
  return $ List [Atom "quote", a]

parseQuasiQuoted :: Parser LispVal
parseQuasiQuoted = do
  char '`'
  a <- parseExpr
  return $ List [Atom "quasiquote", a]

parseUnQuote :: Parser LispVal
parseUnQuote = do
  char ','
  a <- parseExpr
  return $ List [Atom "unquote", a]

parseFloat :: Parser LispVal
parseFloat = do
  whole <- many1 digit
  char '.'
  decimal <- many1 digit
  return $ Float (read (whole ++ "." ++ decimal))


--
-- evaluation
--
instance Show LispVal where show = showVal
instance Eq LispVal where a == b = a `eq` b

eq :: LispVal -> LispVal -> Bool
eq (Atom a) (Atom b)                 = a == b
eq (List a) (List b)                 = a == b
eq (Char a) (Char b)                 = a == b
eq (Bool a) (Bool b)                 = a == b
eq (Number a) (Number b)             = a == b
eq (Float a) (Float b)               = a == b
eq (Complex a) (Complex b)           = a == b
eq (Rational a) (Rational b)         = a == b
eq (String a) (String b)             = a == b
eq (Vector a) (Vector b)             = a == b
eq (DottedList a b) (DottedList c d) = a == c && b == d
eq _ _                               = False

showVal :: LispVal -> String
showVal (String contents)      = "\"" ++ contents ++ "\""
showVal (Atom name)            = name
showVal (Number contents)      = show contents
showVal (Complex c)            = show c
showVal (Float f)              = show f
showVal (Rational r)           = show r
showVal (Bool True)            = "#t"
showVal (Bool False)           = "#f" -- convert these lists to strings:
showVal (Vector v)             = "(" ++ unwordsList (els v) ++ ")"
showVal (List contents)        = "(" ++ unwordsList contents ++ ")"
showVal (DottedList head tail) = "(" ++ unwordsList head ++ " . " ++ showVal tail ++ ")"
showVal (PrimitiveFunc _)      = "<primitive>"
showVal (Func {params = args, vararg = varargs, body = body, closure = env}) =
  "(lambda (" ++ unwords (map show args) ++
    (case varargs of
       Nothing  -> ""
       Just arg -> " . " ++ arg) ++ ") ...)"
showVal (Port _)               = "<IO port>"
showVal (IOFunc _)             = "<IO primitive>"

-- unwords is from Prelude; sticks together words with spaces
unwordsList :: [LispVal] -> String
unwordsList = unwords . map showVal
-- point-free

eval :: Env -> LispVal -> IOThrowsError LispVal
eval env val@(String _) = return val
eval env val@(Number _) = return val
eval env val@(Bool _)   = return val
eval env (Atom id)      = getVar env id
eval env (List [Atom "load", String filename]) =
     load filename >>= liftM last . mapM (eval env)
eval env (List [Atom "quote", val]) = return val
eval env (List [Atom "if", pred, conseq, alt ]) = do
  result <- eval env pred
  case result of
    Bool False -> eval env alt
    Bool True  -> eval env conseq
    otherwise  -> throwError $ BadSpecialForm "Predicate must be boolean in" otherwise
eval env (List (Atom "cond" : (h@(List [test, expr]) : clauses))) = do
  result <- eval env test
  case result of
    Bool True  -> eval env expr
    Bool False -> eval env (List (Atom "cond" : clauses))
    pred -> throwError $ TypeMismatch "boolean" pred
eval env (l@(List (Atom "cond": []))) = throwError $ BadSpecialForm "One of the conditions must be true" l
eval env (List (Atom "cond": a)) = throwError $ TypeMismatch "list" (head a)
eval env (List [Atom "set!", Atom var, form])   = eval env form >>= setVar env var
eval env (List [Atom "define", Atom var, form]) = eval env form >>= defineVar env var
eval env (List (Atom "define" : List (Atom var : params) : body)) =
  makeNormalFunc env params body >>= defineVar env var
eval env (List (Atom "define" : DottedList (Atom var : params) varargs : body)) =
   makeVarArgs varargs env params body >>= defineVar env var
eval env (List (Atom "lambda" : List params : body)) =
   makeNormalFunc env params body
eval env (List (Atom "lambda" : DottedList params varargs : body)) =
   makeVarArgs varargs env params body
eval env (List (Atom "lambda" : varargs@(Atom _) : body)) =
   makeVarArgs varargs env [] body
eval env (List (function : args)) = do
   func    <- eval env function
   argVals <- mapM (eval env) args
   apply func argVals
eval env (List elems) = return $ List elems
eval env badForm      = throwError $ BadSpecialForm "Unrecognized special form" badForm

apply :: LispVal -> [LispVal] -> IOThrowsError LispVal
apply (PrimitiveFunc func) args = liftThrows $ func args
apply (Func params varargs body closure) args =
  if num params /= num args && isNothing varargs
     then throwError $ NumArgs (num params) args
     else liftIO (bindVars closure $ zip params args) >>= bindVarArgs varargs >>= evalBody
       where remainingArgs       = drop (length params) args
             num                 = toInteger . length
             evalBody env        = liftM last $ mapM (eval env) body
             bindVarArgs arg env = case arg of
                 Just argName -> liftIO $ bindVars env [(argName, List remainingArgs)]
                 Nothing      -> return env
apply (IOFunc func) args = func args
apply a bs = return $ List (a:bs)

primitiveBindings :: IO Env
primitiveBindings = nullEnv >>= (flip bindVars $ map (makeFunc IOFunc) ioPrimitives
                                              ++ map (makeFunc PrimitiveFunc) primitives)
                                                where makeFunc constructor (var, func) = (var, constructor func)

primitives :: [(String, [LispVal] -> ThrowsError LispVal)]
primitives = [
    ("+", numericBinop (+))
  , ("-", numericBinop (-))
  , ("*", numericBinop (*))
  , ("/", numericBinop div)
  , ("mod", numericBinop mod)
  , ("quotient", numericBinop quot)
  , ("remainder", numericBinop rem)
  , ("=", numBoolBinop (==))
  , ("<", numBoolBinop (<))
  , (">", numBoolBinop (>))
  , ("/=", numBoolBinop (/=))
  , (">=", numBoolBinop (>=))
  , ("<=", numBoolBinop (<=))
  , ("&&", boolBoolBinop (&&))
  , ("||", boolBoolBinop (||))
  , ("string=?", strBoolBinop (==))
  , ("string<?", strBoolBinop (<))
  , ("string>?", strBoolBinop (>))
  , ("string<=?", strBoolBinop (<=))
  , ("string>=?", strBoolBinop (>=))
  , ("car", car)
  , ("cdr", cdr)
  , ("cons", cons)
  , ("eq?", eqv)
  , ("eqv?", eqv)
  , ("equal?", equal)
  , ("symbol?", unaryOp symbolp)
  , ("string?", unaryOp stringp)
  , ("number?", unaryOp numberp)
  , ("bool?", unaryOp boolp)
  , ("list?", unaryOp listp)
  , ("symbol->string", unaryOp symbolToString)
  , ("string->symbol", unaryOp stringToSymbol)
  ]

numericBinop :: (Integer -> Integer -> Integer) -> [LispVal] -> ThrowsError LispVal
numericBinop op           []  = throwError $ NumArgs 2 []
numericBinop op singleVal@[_] = throwError $ NumArgs 2 singleVal
numericBinop op params        = liftM (Number . foldl1 op) (mapM unpackNum params)
-- numericBinop op params        = mapM unpackNum params >>= return . Number . foldl1 op

unaryOp :: (LispVal -> ThrowsError LispVal) -> [LispVal] -> ThrowsError LispVal
unaryOp f [v] = f v

boolBinop :: (LispVal -> ThrowsError a) -> (a -> a -> Bool) -> [LispVal] -> ThrowsError LispVal
boolBinop unpacker op args = if length args /= 2
                                then throwError $ NumArgs 2 args
                                else do left  <- unpacker $ head args
                                        right <- unpacker $ args !! 1
                                        return $ Bool $ left `op` right

numBoolBinop  = boolBinop unpackNum
strBoolBinop  = boolBinop unpackStr
boolBoolBinop = boolBinop unpackBool

symbolp, numberp, stringp, boolp, listp, stringToSymbol, symbolToString :: LispVal -> ThrowsError LispVal
symbolp (Atom _)          = return $ Bool True
symbolp _                 = return $Bool False
numberp (Number _)        = return $ Bool True
numberp _                 = return $Bool False
stringp (String _)        = return $ Bool True
stringp _                 = return $Bool False
boolp (Bool _)            = return $ Bool True
boolp _                   = return $Bool False
listp (List _)            = return $ Bool True
listp (DottedList _)      = return $ Bool True
listp _                   = return $Bool False
stringToSymbol (String a) = return $ Atom a
stringToSymbol a          = throwError $ TypeMismatch "string" a
symbolToString (Atom a)   = return $ String a
symbolToString a          = throwError $ TypeMismatch "symbol" a

-- sort-of type coercion!
unpackNum :: LispVal -> ThrowsError Integer
unpackNum (Number n) = return n
unpackNum (String n) = let parsed = reads n in
                           if null parsed
                              then throwError $ TypeMismatch "number" $ String n
                              else return $ fst $ head parsed
unpackNum (List [n]) = unpackNum n
unpackNum notNum     = throwError $ TypeMismatch "number" notNum
-- `reads` returns a list of pairs: (parsed value, remaining string)

unpackStr :: LispVal -> ThrowsError String
unpackStr (String s) = return s
unpackStr (Number s) = return $ show s
unpackStr (Bool s)   = return $ show s
unpackStr notString  = throwError $ TypeMismatch "string" notString

unpackBool :: LispVal -> ThrowsError Bool
unpackBool (Bool b) = return b
unpackBool notBool  = throwError $ TypeMismatch "boolean" notBool

-- car and cdr, because lisp
car :: [LispVal] -> ThrowsError LispVal
car [List (x : xs)]         = return x
car [DottedList (x : xs) _] = return x
car [badArg]                = throwError $ TypeMismatch "pair" badArg
car badArgList              = throwError $ NumArgs 1 badArgList

cdr :: [LispVal] -> ThrowsError LispVal
cdr [List (x : xs)]         = return $ List xs
cdr [DottedList [_] x]      = return x
cdr [DottedList (_ : xs) x] = return $ DottedList xs x
cdr [badArg]                = throwError $ TypeMismatch "pair" badArg
cdr badArgList              = throwError $ NumArgs 1 badArgList

cons :: [LispVal] -> ThrowsError LispVal
cons [x1, List []]         = return $ List [x1]
cons [x, List xs]          = return $ List $ x : xs
cons [x, DottedList xs xf] = return $ DottedList (x : xs) xf
cons [x1, x2]              = return $ DottedList [x1] x2
cons badArgList            = throwError $ NumArgs 2 badArgList

-- eq, eqv, equal
data Unpacker = forall a. Eq a => AnyUnpacker (LispVal -> ThrowsError a)

unpackEquals :: LispVal -> LispVal -> Unpacker -> ThrowsError Bool
unpackEquals a b (AnyUnpacker unpacker) =
             do unpackedA <- unpacker a
                unpackedB <- unpacker b
                return $ unpackedA == unpackedB
        `catchError` const (return False)

eqv :: [LispVal] -> ThrowsError LispVal
eqv [Bool a, Bool b]                   = return $ Bool $ a == b
eqv [Number a,Number b]                = return $ Bool $ a == b
eqv [String a, String b]               = return $ Bool $ a == b
eqv [Atom a, Atom b]                   = return $ Bool $ a == b
eqv [DottedList xs x, DottedList ys y] = eqv [List $ xs ++ [x], List $ ys ++ [y]]
eqv [l1@(List a), l2@(List b)]         = eqvList eqv [l1, l2]
eqv [_, _]                             = return $ Bool False
eqv badArgList                         = throwError $ NumArgs 2 badArgList

equal :: [LispVal] -> ThrowsError LispVal
equal [l1@(List a), l2@(List b)] = eqvList equal [lq, l2]
equal [DottedList xs x, DottedList ys y] = equal [List $ xs ++ [x], List $ ys ++ [y]]
equal [a, b] = do
      primitiveEquals <- liftM or $ mapM (unpackEquals a b)
                         [AnyUnpacker unpackNum, AnyUnpacker unpackStr, AnyUnpacker unpackBool]
      eqvEquals <- eqv [a, b]
      return $ Bool (primitiveEquals || let (Bool x) = eqvEquals in x)
equal badArgList = throwError $ NumArgs 2 badArgList

eqvList :: ([LispVal] -> ThrowsError LispVal) -> [LispVal] -> ThrowsError LispVal
eqvList eqvFunc [List a, List b] = return $ Bool $ (length a == length b) &&
  all eqvPair (zip a b)
    where eqvPair (x, y) = case eqvFunc [x, y] of
          Left err         -> False
          Right (Bool val) -> val

--
-- errors
--

data LispError = NumArgs Integer [LispVal]
               | TypeMismatch String LispVal
               | Parser ParseError
               | BadSpecialForm String LispVal
               | NotFunction String String
               | UnboundVar String String
               | Default String

showError :: LispError -> String
showError (UnboundVar message varname)  = message ++ ": " ++ varname
showError (BadSpecialForm message form) = message ++ ": " ++ show form
showError (NotFunction message func)    = message ++ ": " ++ show func
showError (NumArgs expected found)      = "Expected " ++ show expected ++ " args; found values " ++ unwordsList found
showError (TypeMismatch expected found) = "Invalid type: expected " ++ expected ++ ", found " ++ show found
showError (Parser parseErr)             = "Parse error at " ++ show parseErr
showError (Default message)             = "Error: " ++ message

instance Show LispError where show = showError

instance Error LispError where
  noMsg  = Default "An error has occurred."
  strMsg = Default

instance Eq LispError where a == b = a `eqError` b

eqError (NumArgs a b) (NumArgs c d)               = (a == c) && (b == d)
eqError (TypeMismatch a b) (TypeMismatch c d)     = (a == c) && (b == d)
eqError (BadSpecialForm a b) (BadSpecialForm c d) = (a == c) && (b == d)
eqError (NotFunction a b) (NotFunction c d)       = (a == c) && (b == d)
eqError (UnboundVar a b) (UnboundVar c d)         = (a == c) && (b == d)
eqError (Default a) (Default b)                   = a == b
eqError a b                                       = False

type ThrowsError = Either LispError

-- convert errors to strings
trapError action = catchError action (return . show)

extractValue :: ThrowsError a -> a
extractValue (Right val) = val

--
-- repl
--

flushStr :: String -> IO ()
flushStr str = putStr str >> hFlush stdout

readPrompt :: String -> IO String
readPrompt prompt = flushStr prompt >> getLine

evalString :: Env -> String -> IO String
evalString env expr = runIOThrows $ liftM show $ liftThrows (readExpr expr) >>= eval env
-- evalString env expr = runIOThrows $ liftM show $ (liftThrows $ readExpr expr) >>= eval env

evalAndPrint :: Env -> String -> IO ()
evalAndPrint env expr = evalString env expr >>= putStrLn

-- this is our own sort of `interact`
-- kinda like `sequence . repeat . interact` except we can exit the loop
until_ :: Monad m => (a -> Bool) -> m a -> (a -> m ()) -> m ()
until_ pred prompt action = do
  result <- prompt
  unless (pred result) $ action result >> until_ pred prompt action
  -- if pred result
  -- then return ()
  -- else action result >> until_ pred prompt action

runOne :: [String] -> IO ()
runOne args = do
  env <- primitiveBindings >>= flip bindVars [("args", List $ map String $ drop 1 args)]
  runIOThrows (liftM show $ eval env (List [Atom "load", String (head args)]))
  -- (runIOThrows $ liftM show $ eval env (List [Atom "load", String (args !! 0)]))
    >>= hPutStrLn stderr

runRepl :: IO ()
runRepl = primitiveBindings >>= until_ (== ":q") (readPrompt "z> ") . evalAndPrint

--
-- vars
--

type Env = IORef [(String, IORef LispVal)]

nullEnv :: IO Env
nullEnv = newIORef []

type IOThrowsError = ErrorT LispError IO

liftThrows :: ThrowsError a -> IOThrowsError a
liftThrows (Left err)  = throwError err
liftThrows (Right val) = return val

runIOThrows :: IOThrowsError String -> IO String
runIOThrows actoin = liftM extractValue (runErrorT (trapError action))
-- runIOThrows action = runErrorT (trapError action) >>= return .extractValue

isBound :: Env -> String -> IO Bool
isBound envRef var = liftM (isJust . lookup var) (readIORef envRef)
-- isBound envRef var = readIORef envRef >>= return . maybe False (const True) . lookup var

getVar :: Env -> String -> IOThrowsError LispVal
getVar envRef var = do env <- liftIO $ readIORef envRef
                       maybe (throwError $ UnboundVar "unbound var" var)
                             (liftIO . readIORef)
                             (lookup var env)

setVar :: Env -> String -> LispVal -> IOThrowsError LispVal
setVar envRef var value = do env <- liftIO $ readIORef envRef
                             maybe (throwError $ UnboundVar "setting unbound var" var)
                                   (liftIO . (flip writeIORef value))
                                   (lookup var env)
                             return value

defineVar :: Env -> String -> LispVal -> IOThrowsError LispVal
defineVar envRef var value = do
  alreadyDefined <- liftIO $ isBound envRef var
  if alreadyDefined
     then setVar envRef var value >> return value
     else liftIO $ do
       valueRef <- newIORef value
       env <- readIORef envRef
       writeIORef envRef ((var, valueRef) : env)
       return value

bindVars :: Env -> [(String, LispVal)] -> IO Env
bindVars envRef bindings = readIORef envRef >>= extendEnv bindings >>= newIORef
  where extendEnv bindings env = liftM (++ env) (mapM addBinding bindings)
        addBinding (var, value) = do ref <- newIORef value
                                     return (var, ref)

--
-- functions
--

makeFunc varargs env params body = return $ Func (map showVal params) varargs body env
makeNormalFunc = makeFunc Nothing
makeVarArgs = makeFunc . Just . showVal

--
-- IO primitives
--

ioPrimitives :: [(String, [LispVal] -> IOThrowsError LispVal)]
ioPrimitives = [
    ("apply", applyProc)
  , ("open-input-file", makePort ReadMode)
  , ("open-output-file", makePort WriteMode)
  , ("close-input-port", closePort)
  , ("close-output-port", closePort)
  , ("read", readProc)
  , ("write", writeProc)
  , ("read-contents", readContents)
  , ("read-all", readAll)
  ]

applyProc :: [LispVal] -> IOThrowsError LispVal
applyProc [func, List args] = apply func args
applyProc (func : args)     = apply func args

makePort :: IOMode -> [LispVal] -> IOThrowsError LispVal
makePort mode [String filename] = liftM Port $ liftIO $ openFile filename mode

closePort :: [LispVal] -> IOThrowsError LispVal
closePort [Port port] = liftIO $ hClose port >> return (Bool True)
closePort _           = return $ Bool False

readProc :: [LispVal] -> IOThrowsError LispVal
readProc []          = readProc [Port stdin]
readProc [Port port] = liftIO (hGetLine port) >>= liftThrows . readExpr

writeProc :: [LispVal] -> IOThrowsError LispVal
writeProc [obj]            = writeProc [obj, Port stdout]
writeProc [obj, Port port] = liftIO $ hPrint port obj >> return (Bool True)

readContents :: [LispVal] -> IOThrowsError LispVal
readContents [String filename] = liftM String $ liftIO $ readFile filename

load :: String -> IOThrowsError [LispVal]
load filename = liftIO (readFile filename) >>= liftThrows . readExprList

readAll :: [LispVal] -> IOThrowsError LispVal
readAll [String filename] = liftM List $ load filename

listOp :: ([LispVal] -> ThrowsError LispVal) -> [LispVal] -> ThrowsError LispVal
listOp op = op
