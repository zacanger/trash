Differences from JS:

Elm has multiline string support, with _triple_ sets of quotes, eg """multiline string"""

Elm _cannot_ use single quotes for _strings_. Elm uses single quotes to denote _characters_.

Booleans are uppercase.

Objects use `=` instead of `:`, so `{key: value, key2: value2}` in JS would be `{key = value, key2 = value2}` in Elm.

`point.x = 42` in JS would be `{point | x = 42}` in Elm.

Functions are greatly simplified. `function(foo, bar){return foo+bar}` in js would be `\foo bar -> foo + bar` in Elm.

Math is a little simpler: `Math.max(2,4)` is just `max 2 4`. Same with `min`. `Math.pow` is just `^`, eg `Math.min(1, Math.pow(2, 4))` is `min 1 (2^4)`.

`numbers.map(Math.sqrt)` would be `List.map sqrt numbers`. `points.map(function(p){return p.x})` becomes `List.map .x points`.

`2 < 4 ? 'WHAT' : 'how?'`, `if 2 < 4 then "WHAT" else "how?"`

`var foo = 72`; `let foo = 72 in...`

No return statements; everything is an expression.

`String.length "asdf"` rather than 'asdf.length'

Mostly it looks pretty neat, but there's virtually nothing out there for actually _learning_ it, so I'm already kind of over it....

Note that the 'EventLog.elm' in this directory doesn't actually need the start-app package anymore; turns out it's really easy to just wire the damn thing up all on your own.
