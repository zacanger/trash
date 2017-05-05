## notes from 4th may 2017 meetup

```clojure
(def foo {:bar "a"})
(get foo :baz "default")
;; => "default"
```

* conj will do the most efficient thing for that data structure
  * for `list` it'll be at the front; for vectors it'll be at the end
  * for maps, ¯\_(ツ)_/¯

* `clj->js`!!!!!
  * `(.log js/console (clj->js {:foo "bar"}))`

```clojure
(def num-one (atom 1))
```

* CLOJURE DOES NOT HAVE CAR/CDR?!
  * `first`/`rest`

* just swap an atom. there's your state management. done.
