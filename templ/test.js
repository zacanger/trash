require('./index')

var werdz = {
  thingone: 'howdy'
, thingtwo: 'you'
}
var greets = '<strong>{thingone}</strong>, <em>{thingtwo}</em>'
console.log(greets.tmpl(werdz))

var msg = {
  name: "zacanger"
, message: {
    text: "howdy"
  , date: "Mon Jan 18 00:22:18 MST 2016"
  }
}

var display = [
    '<p>',
      '<strong>{user}:</strong>',
      '<span>{message.text}</span>',
      '<em>{message.date}</em>',
    '</p>'
].join('')

console.log(display.tmpl(msg))

