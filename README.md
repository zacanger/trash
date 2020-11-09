# cozy

Language idea.
No implementation attempted yet, just some thoughts.
See cozy.cz files for examples.
If using Vim, `:source cozy.vim` for highlighting.

[![Support with PayPal](https://img.shields.io/badge/paypal-donate-yellow.png)](https://paypal.me/zacanger) [![Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/zacanger) [![ko-fi](https://img.shields.io/badge/donate-KoFi-yellow.svg)](https://ko-fi.com/U7U2110VB)

--------

## Installation

TODO

## Usage

TODO

## Goals

* Simple, human-readable, high level
* Dynamic, strong
* Functional ideas but Python/Go/Shell/Ruby-ish syntax
* No classes or other OOP-specific constructs (just functions and data)
* Compiled, but with a dev-time interpreter (like `runhaskell` or `go run`)
  and a REPL (like `ghci` or `gore`)
* Or maybe interpreted, intended to be used as an embedded scripting
  language in Rust or something else?
* Small implementation in host language, with as many features as possible
  implemented in the standard library

## Basics

* Shell style comments, no multiline comment syntax
* No null, no undefined
* All functions must return a value
* All variables must be initialized to something
* Block scope, file scope, and application scope (export)
* All variables are immutable unless 1. in a function and 2. ending with !
* Indentation has no semantic impact, but two spaces is the recommendation
* Line lengths should not exceed 80 chars
* camelCase is preferred but PascalCase or snake_case also work
* Modules (use the word module instead of library or package) based on Git, no
  centralized module repository. Modules are just one or more source files,
  compiled along with your app, not distributed as binaries.
* Errors are values that work like dictionaries

## TODO

Basically everything.

* dictionary iteration/utils
* curry, memo, and other FP utils
* operator precedence and grouping
* includes or contains function (dicts, arrays, strings)
* regex
* ++ vs append, do we need both, and should they be separate for different
  types
* docstrings, embedded markdown?
* comment syntax, is this good or not?
* simple built-in testing library (more like tape/unittest than rspec/jest)
* module management (tooling, metadata)
* vim and other editor files
* peg or ebnf grammar
* timers, async and concurrency models
* core/builtin modules:
  * cryptography, random
  * network (tcp, http, http2, dns, tls, anything else? more than one
    namespace?)
  * process-related
  * argv, argument/flag parsing?
  * stdin, stdout, tty
  * filesystem, path
  * constants, os info
  * module-related
  * how much should be stdlib, how much should be in modules? should stdlib
    be a module?

[LICENSE](./LICENSE.md)
