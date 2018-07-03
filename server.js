var express = require('express')
var app = express()

app.use(require('connect-livereload')())
app.use(express.static('demo05-fade in effect'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/demo05-fade in effect/index.html')
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
