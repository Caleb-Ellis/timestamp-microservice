var express = require('express');
var moment = require('moment');
var app = express();

app.use(express.static('public'));

app.get('/:timeQuery', function(req, res){
  var timeQuery = req.params.timeQuery;
  var date;

  if (isNaN(timeQuery)) {
    date = moment(timeQuery, 'MMMM D, YYYY');
  } else {
    date = moment(timeQuery, 'X');
  }

  if (date.isValid()) {
    res.json({
      unix: date.format('X'),
      natural: date.format('MMMM D, YYYY')
    });
  } else {
    res.json({
      unix: null,
      natural: null
    });
  }
});

app.listen(3000);
console.log('Listening to port 3000');
