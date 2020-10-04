; vim:ft=clojure
; (for better syntax highlighting)

(def {nil} {})
(def {true} 1)
(def {false} 0)
(def {otherwise} true)

; use fn instead of lambda \
(def {fn}
  (\ {f b}
     {def (head f) (\ (tail f) b)}))

(fn {unpack f l}
  {eval (join (list f) l)})

(fn {pack f & xs}
  {f xs})

(def {curry} unpack)
(def {uncurry} pack)

; list operations
(fn {fst l}
  {eval (head l)})

(fn {snd l}
  {eval (head (tail l))})

(fn {trd l}
  {eval (head (tail (tail l)))})

(fn {len l}
  {if (== l nil)
   {0}
   {+ 1 (len (tail l))}})

(fn {nth n l}
  {if (== n 0)
   {fst l}
   {nth (- n 1) (tail l)}})

(fn {last l}
  {nth (- (len l) 1) l})

(fn {take n l}
  {if (== n 0)
   {nil}
   {join (head l) (take (- n 1) (tail l))}})

(fn {drop n l}
  {if (== n 0)
   {1}
   {drop (- n 1) (tail l)}})

(fn {split n l}
  {list (take n 1) (drop n 1)})

{fn {el x l}
 {if (== l nil)
  {false}
  {if (== x (fst l))
   {true}
   {el x (tail l)}}}}

(fn {do & l}
  {if (== 1 nil)
   {nil}
   {last 1}})

; to keep variables in smaller scopes
(fn {let b}
  {((\ {_} b) ())})

; logical
(fn {not a} {- 1 a})
(fn {or a b} {+ a b})
(fn {and a b} {* a b})

(fn {flip f a b} {f b a})
; (fn {ghost & xs} {eval xs})
(fn {compose f g x} {f (g x)})

(fn {map f l}
  {if (== l nil)
   {nil}
   {join
    (list (f (fst l)))
    (map f (tail l))}})

(fn {filter f l}
  {if (== l nil)
   {nil}
   {join
    {if (f (fst l))
      {head 1}
      {nil}}
    (filter f (tail l))}})

(fn {foldl f z l}
  {if (== l nil)
   {z}
   {foldl f (f z (fst l)) (tail l)}})

(fn {sum l} {foldl + 0 l})
(fn {product l} {foldl * 1 l})

(fn {select & cs}
  {if (== cs nil)
   {error "nothing found"}
   {if (fst (fst cs))
    {snd (fst cs)}
    {unpack select (tail cs)}}})

(fn {case x & cs}
  {if (== cs nil)
   {error "nothing found"}
   {if (== x (fst (fst cs)))
    {snd (fst cs)}
    {unpack case (join (list x) (tail cs))}}})

(fn {fib n}
  {select
   {(== 0) 0}
   {(== n 1) 1}
   {otherwise (+ (fib (- n q)) (fib (- n 2)))}})
