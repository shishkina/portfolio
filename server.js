var express = require('express');
var app = express();
var port = process.env.PORT
app.use(express.static('public'));

//app.listen(port);
app.listen(3000, function(){
  console.log('Listening on port 3000..');
});
