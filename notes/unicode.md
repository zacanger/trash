unicode is _not_ a 16-bit system. unlike mapping letters to bits (`A->0100 0001`, for example), with unicode, characters are mapped to a theoretical concept called a _**code point**_. So, it's an... ideal.

that 'code point' ideal is represented by those numbers we already know, like `U+0639` and such. the the numbers are a hexadecimal (and the `U+` obviously means 'unicode').

so, early on in the unicode world, the idea was to store those numbers in two bytes, each. but then there was some shit over high-endian.low-endian, because wtf, so now there's that `FF FE` or whatever at the beginning, which is the unicode BOM.

but then basically because amuricuns were still using the most boring bits of the latin alphabet, we came up with utf-8. which kind of fucked over everyone else. because now we have 0-127 all in _one single byte_, and then 128 on up stored in 2-6 bytes. so, english text looks the same as before (in ascii), but now a whole bunch of other stuff is fucked, beacuse you have to use _several_ bytes to store other characters.


