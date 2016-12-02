;; i feel like this is gross and not correct
(define value
  (λ (a)
     (cond
       ((atom? a) a)
       ((eq? (car a) '+))
       (+ (value (cdr a))
          (value (cdr (cdr a)))))
     ((eq? (car a) '*))
     (* value (cdr a))
     (value (cdr (cdr a))))
  (else
    (^ (value (cdr a))
       (value (cdr (cdr a))))))
