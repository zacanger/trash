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

