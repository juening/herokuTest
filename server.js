var express = require('express');
var app = express();

var port = process.env.PORT;

app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(port, function() {
  console.info('App is listening on port ', port);
});