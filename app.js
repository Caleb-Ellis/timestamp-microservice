var express = require('express');
var moment = require('moment');
var app = express();

var port = process.env.PORT || 3000;

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

app.listen(port, function() {
  console.log('App is running on http://localhost:' + port);
});
