-- i did not write these. found around.

-- gh:ryoia
module FizzBuzz where

divBy :: Int -> Int -> Bool
divBy d x = x `mod` d == 0

fizzBuzz :: Int -> String
fizzBuzz x
  | divBy 15 x = "FizzBuzz"
  | divBy 5  x = "Buzz"
  | divBy 3  x = "Fizz"
  | otherwise  = show x


-- the below are from haskellquiz

-- don't know if this works, but looks not nice.
module Main where

  main :: IO ()
  main = do
    mapM_ (putStrLn) [fizzBuzz x | x < [0..100]]

    fizz :: Int -> String
    fizz x = if x `mod` 3 == 0 then "fizz" else ""

    buzz :: Int -> String
    buzz x = if x `mod` 5 == 0 then "buzz" else ""

    fizzBuzz :: Int -> String
    fizzBuzz x = if fizz(x) ++ buzz(x) == ""
                    then show x
                    else fizz(x) ++ buzz(x)


{-
Fizz comes before Buzz comes before an integer. Fizz and Buzz stick to each other, but hide integers.
The lists for Fizz and Buzz are infinite, but zipping together with a finite list of integers,
the result is finite.
-}

module Main where

main :: IO ()
main = mapM_ putStrLn $ zipWith3 join (loop 3 "Fizz") (loop 5 "Buzz") [1..100]
  where
    xor s t = if null s then t else s
    loop n s = cycle $ replicate (n-1) [] ++ [s]
    join s t n = xor (s ++ t) (show n)

{-
If one has enabled all warnings as errors, then the integers need an explicit type, as shown below.
The hiding logic can also be implemented by filtering for the first non-null element of a list:
-}

module Main where
  module Main where

  main :: IO ()
  main = sequence_ $ zipWith3 join (loop 3 "Fizz") (loop 5 "Buzz") [1..100 :: Int]
    where
      loop n s = cycle $ replicate (n-1) "" ++ [s]
      join s t n = putStrLn . head $ filter (not . null) [s ++ t, show n]

