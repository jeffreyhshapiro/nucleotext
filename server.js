var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('view/css'))
app.use(express.static('view/html'))
app.use(express.static('view/js'))

app.get('/', function(req, res) {
  res.sendFile(index.html)
})

app.listen(PORT, function(){
  console.log('listening on '+ PORT)
})
