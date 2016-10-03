(define atom?
  (λ (x)
    (and (not (pair? x)) (not (null? x)))))

(define lat?
  (λ (l)
    (cond
      ((null? l) #t)
      ((atom? (car l)) (lat? (cdr l)))
      (else #f))))

(define member?
  (λ (a lat)
    (cond
      ((null? lat) #f)
      (else (or (eq? (car lat) a)
                (member? a (cdr lat)))))))
