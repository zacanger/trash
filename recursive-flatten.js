const flatten = a => Array.isArray(a) ? [].concat(...a.map(flatten)) : a
