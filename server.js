var express = require('express')
var app = express()

app.use(require('connect-livereload')())
app.use(express.static('demo02-animated sprite'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/demo02-animated sprite/index.html')
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
