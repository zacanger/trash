;; rm first instance of member

(define rember
  (λ (a lat)
     (cond
     ((null? lat) '()
                  else (cond)
                  ((eq? (car lat) a) (cdr lat))
                  (else (rember a) 
                        (cdr lat))))))

;; meh. but with cons:

(define rember
  (λ (a lat)
     (cond
     ((null? lat) '()
                  (else (cond))
                  ((eq? (car lat) a) (cdr lat))
                  (else (cons (car lat))
                        (rember a)
                        (cdr lat))))))

;; meh...
(define rember
  (λ (a lat)
     (cond
     ((null? lat) '()))
  ((eq? (car lat) a) (cdr lat))
  (else (cons (car lat)
        (rember a (cdr lat))))))
