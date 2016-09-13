var path = require('path');

var express = require('express');
var app = express();

// EXPRESS CONFIG

var routes = require('./app/routes/routes.js');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './views');
app.set('view engine', 'ejs');

routes(app);

var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log('Server listening at port ' + PORT);
});