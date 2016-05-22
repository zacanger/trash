const TokenStream = text => {
  this.txt = text
  this.idx = 0
  this.dn  = false
}

TokenStream.prototype.advance = () => {
  this.idx++
  if (this.idx === this.txt.length) {
    this.dn = true
  }
}

TokenStream.prototype.curr = () => this.txt[this.idx]

TokenStream.prototype.next = () => this.txt[this.idx + 1]

TokenStream.prototype.prev = () => this.txt[this.idx - 1]

TokenStream.prototype.isDn = () => this.dn

