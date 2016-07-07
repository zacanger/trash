#!/usr/bin/env node

const
  fs    = require('fs')
, file  = process.argv[2] || 'something.js'

try {
  fs.statSync(file)
} catch (e) {
  fs.writeFileSync(file, `'use strict'`)
}
