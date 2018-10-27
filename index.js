require('luvi')({
  name: 'angry.technology',
  root: require('path').resolve(__dirname, 'build'),
  port: 5000,
  noOpen: true
})
