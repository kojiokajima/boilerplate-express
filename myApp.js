var express = require('express');
var app = express();

console.log("Hello World");


app.get('/', (req, res, next) => {
  // res.send("Hello Express")
  res.sendFile("/views/index.html")
})































module.exports = app;
