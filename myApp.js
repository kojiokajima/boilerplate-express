var express = require('express');
var app = express();

var absolutePath = __dirname + "/views/index.html"
console.log(absolutePath);


app.get('/', (req, res, next) => {
  // res.send("Hello Express")
  res.sendFile(absolutePath)
})































module.exports = app;
