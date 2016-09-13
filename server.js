var mongoose = require('./config/mongoose.js');
var express = require('./config/express.js');

var db = mongoose();
var app = express();

var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log('Server listening at port ' + PORT);
});