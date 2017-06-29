;; compare js:
;; const unless = (cond, fn) => !cond ? fn() : null

(defmacro unless [pred body]
  (list 'if pred
        nil
        body))
