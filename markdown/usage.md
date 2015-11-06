## welcome to markvi!

First things first... if you're typing and nothing seems to be happening, try hitting `i` (for _insert_) first. If you're trying to use your keys for other things but not having any luck, try hitting `esc` to enter 'normal' (or 'command') mode.

Now that that's out of the way...

### welcome to markvi (again!)

This is a simple, but hopefully very useable and enjoyable, Markdown writing app. What sets **markvi** apart is that little _vi_ bit--generally speaking, one doesn't find a Markdown-dedicated in-browser editor with esoteric Unix-y sort of keybinds, I expect. If you're not familiar with vi commands and keybinds, don't worry--no one is, at first--and anyway, you can use **markvi** without keybinds as well!

Blah blah blah... Here's a quick little guide on getting things done with vi.

| Key           | Action
| ------------- |:-------------:|
| :x | Exit (and save) |
| :q | Exit (no changes) |
| :q! | Exit (ignore changes |
| ZZ | (Exit, save if changes) |
| i | Enter insert mode (before cursor) |
| I | Enter insert mode (before line) |
| esc | Enter normal mode |
| a | Append (after cursor) |
| A | Append (after line) |
| o | Open new line (after current) |
| O | Open new line (before current) |
| r | Replace current character |
| R | Replace characters (overwriting) |
| h | Left |
| j | Right |
| k | Up |
| l | Right |
| w | Next word |
| b | Beginning of word |
| e | End of word |
| $ | End of line |
| 0 | Beginning of line |
| x | Delete current character |
| y | Yank (used with other keys) |
| yy | Yank current line |
| d | Delete (used with other keys) |
| dd | Delete current line |
| p | Put (opposite of Yank) |
| u | Undo last change |
| U | Undo changes to current line |

These are the tiniest bit of the barest basics, but used in combination these keybinds can do some pretty powerful stuff. For example, `d7e` would delete the next seven words, `y4k` would yank the preceeding four lines, and `:q!` would lose all your changes. For some much more detailed resources, try this [Vi Cheatsheet](http://www.lagmonster.org/docs/vi.html), or [this one for Vim](http://vim.rtorr.com/).


#### Markdown


This is intended as a quick reference and showcase. For more complete info, see [John Gruber's original spec](http://daringfireball.net/projects/markdown/), the [Github-flavored Markdown info page](http://github.github.com/github-flavored-markdown/), or the [Markdown-Here Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).


# H1
## H2
### H3
#### H4
##### H5
###### H6

_Emphasis_ (*italics*).
__Strong__ (**bold**).
**Combined _emphasis and strong_**
__Combined emphasis and *strong*__
~~We done did this task, aww yiss.~~

1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

* Unordered list can use asterisks
- Or minuses
+ Or pluses


###### Links

[I'm an inline-style link](https://www.google.com)
[I'm an inline-style link with title](https://www.google.com "Google's Homepage")
[I'm a reference-style link][Arbitrary case-insensitive reference text]
<http://www.example.com>

[arbitrary case-insensitive reference text]: https://www.mozilla.org

###### Code and Syntax Highlighting

Inline `code` only needs one backtick (grave accent); blocks of code take three:

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

###### Tables

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

###### Blockquotes

> Once upon a time a thing happened.
> It was pretty swell.

###### Horizontal Rule

---

Hyphens

***

Asterisks

___

Underscores


###### Line Breaks

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.
