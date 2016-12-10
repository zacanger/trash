(define value
  (λ (a)
     (cond
       ((atom? a) a)
       (eq? (operator a) '+))
     (+ (value (1st-sub-exp a))
        (value (2nd-sub-exp a))))
  (eq? (operator a) 'x))
(x (value (1st-sub-exp a))
   (value (2nd-sub-exp)))
(else
  (^ (value (1st-sub-exp a))
     (value (2nd-sub-exp a))))

