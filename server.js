var express = require('express');
var app = express();
var favicon = require('serve-favicon');
app.use(express.static('public'));

app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.listen(process.env.PORT || 3000, function () {
  console.log("Listening on port 3000...");
});

// app.get('/img/:name', function(req, res, next){
//     var options = {
//     root: __dirname + '/public/',
//     dotfiles: 'deny',
//     headers: {
//         'x-timestamp': Date.now(),
//         'x-sent': true
//       }
//     };
// });
