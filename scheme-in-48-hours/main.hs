import Text.ParserCombinators.Parsec hiding (spaces)
import System.Environment
import Control.Monad

-- ghc --make -o foo main.hs

main :: IO ()
main = getArgs >>= print . eval . readExpr . head

--
-- parsing
--

symbol :: Parser Char
symbol = oneOf "!#$%&|*+-/:<=>?@^_~"

spaces :: Parser ()
spaces = skipMany1 space

data LispVal = Atom String
             | List [LispVal]
             | DottedList [LispVal] LispVal
             | Number Integer
             | String String
             | Bool Bool

-- use >> if you're not returning a val
-- use >>= if you're passing a val immediately
-- use `do` otherwise

parseString :: Parser LispVal
parseString = do
  char '"'
  x <- many (noneOf "\"")
  char '"'
  return $ String x

parseAtom :: Parser LispVal
parseAtom = do -- an atom is:
  first <- letter <|> symbol -- one of these
  rest <- many (letter <|> digit <|> symbol) -- followed by any number of these
  let atom = first:rest -- cons; could also be [first] ++ rest
  return $ case atom of
             "#t" -> Bool True
             "#f" -> Bool False
             _    -> Atom atom -- 'default'

parseNumber :: Parser LispVal
parseNumber = liftM (Number . read) $ many1 digit

parseExpr :: Parser LispVal
parseExpr = parseAtom
  <|> parseString
  <|> parseNumber
  <|> parseQuoted
  <|> do char '('
         x <- try parseList <|> parseDottedList
         char ')'
         return x

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
  x <- parseExpr
  return $ List [Atom "quote", x]

readExpr :: String -> LispVal
readExpr input = case parse parseExpr "lisp" input of
                   Left err  -> String $ "No match: " ++ show err
                   Right val -> val

--
-- evaluation
--
instance Show LispVal where show = showVal

showVal :: LispVal -> String
showVal (String contents) = "\"" ++ contents ++ "\""
showVal (Atom name) = name
showVal (Number contents) = show contents
showVal (Bool True) = "#t"
showVal (Bool False) = "#f" -- convert these lists to strings:
showVal (List contents) = "(" ++ unwordsList contents ++ ")"
showVal (DottedList head tail) = "(" ++ unwordsList head ++ " . " ++ showVal tail ++ ")"

-- unwords is from Prelude; sticks together words with spaces
unwordsList :: [LispVal] -> String
unwordsList = unwords . map showVal
-- point-free

eval :: LispVal -> LispVal
eval val@(String _) = val
eval val@(Number _) = val
eval val@(Bool _) = val
eval (List [Atom "quote", val]) = val
eval (List (Atom func : args)) = apply func $ map eval args

apply :: String -> [LispVal] -> LispVal
apply func args = maybe (Bool False) ($ args) $ lookup func primitives

primitives :: [(String, [LispVal] -> LispVal)]
primitives = [
    ("+", numericBinop (+))
  , ("-", numericBinop (-))
  , ("*", numericBinop (*))
  , ("/", numericBinop div)
  , ("mod", numericBinop mod)
  , ("quotient", numericBinop quot)
  , ("remainder", numericBinop rem)
  ]

numericBinop :: (Integer -> Integer -> Integer) -> [LispVal] -> LispVal
numericBinop op params = Number $ foldl1 op $ map unpackNum params

-- sort-of type coercion!
unpackNum :: LispVal -> Integer
unpackNum (Number n) = n
unpackNum (String n) = let parsed = reads n :: [(Integer, String)] in
                           if null parsed
                              then 0
                              else fst $ parsed !! 0
unpackNum (List [n]) = unpackNum n
unpackNum _ = 0
-- reads returns a list of pairs: (parsed value, remaining string)

-- start here: https://en.wikibooks.org/wiki/Write_Yourself_a_Scheme_in_48_Hours/Error_Checking_and_Exceptions
