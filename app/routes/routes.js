var validUrl = require('valid-url');
var Url = require('mongoose').model('Url');

var jhash = require('jhash');
jhash.setMaskLen(6);

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    app.get('/new/:protocol*', function(req, res) {
        var originalUrl = req.params.protocol + req.params[0];

        if (validUrl.isWebUri(originalUrl)) {
            var url = new Url();
            url.originalUrl = originalUrl;
            url.save(function(err, data) {
                if (err) {
                    return console.error('Cannot save URL:', err);
                } else {
                    var shortUrl = 'https://bask-shorty-url.herokuapp.com/' + jhash.hash(data.id);
                    return res.json({
                        "original_url": data.originalUrl,
                        "short_url": shortUrl
                    });
                }
            });
        } else {
            res.json({
                error: 'Wrong URL format. Insert both the protocol (http, https, etc.) and the site'
            }); 
        }
    });
};