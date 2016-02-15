var niceDate = '['+Date(Date.now() * 1000).match(/(\d{2}:\d{2}:\d{2})/)[1]+']'
console.log(niceDate)
// or, y'know, we could just do...
var newDate = new Date()
console.log(newDate)
// keeping in mind that both of the above will return the same
// timestamp as when stored in their variable, of course.

