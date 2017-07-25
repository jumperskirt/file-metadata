
// var http = require('http');
// var server = http.createServer();
//
//
// var dataApi = require("./src/api/file");
//
// server.on('request', dataApi);
// server.listen(3001, function() {
//   console.log('Server is listening on port 3001!');
//
// })
//
//
var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/'});


var app = express();
app.listen(3000, function() {
  console.log("listening attentively on port 3000!");
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/' + 'index.html');
});

app.post('/upload', upload.single('file'), function (req, res) {
  if (req.file && req.file.size) {
    res.json({
      name: req.file.originalname,
      size: `${req.file.size} bytes`
    });
  }
  else {
    res.json({
      error: 'error with file upload'
    });
  }
});
