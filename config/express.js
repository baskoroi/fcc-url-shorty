var path = require('path');
var express = require('express');

module.exports = function() {
    var app = express();

    app.use(express.static('./public'));
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    var routes = require('../app/routes/routes.js');
    routes(app);
    
    return app;
};