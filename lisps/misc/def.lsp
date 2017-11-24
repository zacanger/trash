(defmacro defn (name params &body body)
  '(progn
     (setf (symbol-function ',name)
           #'(lambda ,params (block ,name ,@body)))
     ',name))
