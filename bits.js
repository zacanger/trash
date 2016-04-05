// left-pad
leftpad = (str, len, pd = ' ') => Array(len > str.length ? 1+len-str.length : 0).join(pd) + str

// positive/negative nums with type checking
isPositive = (x) => +x === x && x > 0
isNegative = (x) => +x === x && x < 0

// transpose a 2-dimensional matrix like [[1,2,3],[4,5,6],[7,8,9]]
transpose = m => m.map((r, ri) => r.map((c, ci) => m[ci][ri]))

// transpose a flat matrix like [1,2,3,4,5,6,7,8,9]
transposeFlat = (m, l = Math.sqrt(m.length)|0) => m.map((c, i) => m[(i%l)*l + i/l|0])

// reverse digits with correct sign handling
revNum = (n) => Math.sign(n)*(''+Math.abs(n)).split('').reverse().join('')||0

// is num power of two
Po2 = (n) => 1 << (n.toString(2).length - 1) === n

