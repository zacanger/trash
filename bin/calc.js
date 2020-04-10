#!/usr/bin/env node

console.log(eval(process.argv[2].replace(/\^/g, '**')))
