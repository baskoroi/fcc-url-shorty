var validUrl = require('valid-url');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    app.get('/new/:protocol*', function(req, res) {
        var originalUrl = req.params.protocol + req.params[0];

        if (validUrl.isWebUri(originalUrl)) {
            res.json({
                "original_url": originalUrl,
                "short_url": "https://bask-shorty-url.herokuapp.com/1234"
            });
        } else {
            res.json({
                error: 'Wrong URL format. Insert both the protocol (http, https, etc.) and the site'
            }); 
        }
    });
};