var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/:timeQuery', function(req, res){
  var timeQuery = req.params.timeQuery;
  res.send('time: ' + req.params.timeQuery);
});

app.listen(3000);
console.log('Listening to port 3000');
