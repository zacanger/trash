while :: (Monad m) => m Bool -> m () -> m ()
while cond action = do
  c <- cond
  if c
     then action >> while cond action
     else return ()
