var express = require('express');
var app = express();
var favicon = require('serve-favicon');
app.use(express.static('public'));

app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.listen(process.env.PORT || 3000, function () {
  console.log("Listening on port 3000...");
});
