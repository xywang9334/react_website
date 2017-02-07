//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var express = require('express');

var app = express();

app.use(express.static('html'));

app.listen(3000, function () {
  console.log('running');
});
