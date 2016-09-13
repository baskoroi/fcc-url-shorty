var MongoClient = require('mongodb').MongoClient;
var validUrl = require('valid-url');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });
};