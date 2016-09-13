var shortener = require('../controllers/shortener.js');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    app.get('/new/:protocol*', shortener.shortenUrl);
};