var express = require("express")
var app = express()

app.use(require("connect-livereload")())
app.use(express.static("demo06-project"))

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/demo06-project/index.html")
})

app.listen(3000, function() {
  console.log("Example app listening on port 3000!")
})
