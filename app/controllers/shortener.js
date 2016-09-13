var validUrl = require('valid-url');
var Url = require('mongoose').model('Url');

var jhash = require('jhash');

exports.shortenUrl = function(req, res) {
    var originalUrl = req.params.protocol + req.params[0];

    if (validUrl.isWebUri(originalUrl)) {
        Url.findOne({ originalUrl: originalUrl }, function(err, url) {
            if (err) {
                return console.error(err);
            }

            if (url) {
                return res.json({
                    "original_url": url.originalUrl,
                    "short_url": 'https://bask-shorty-url.herokuapp.com/' + url.shortcode
                });
            } else {
                var url = new Url({
                    originalUrl: originalUrl,
                    shortcode: jhash.hash(originalUrl)
                });
                url.save(function(err, url) {
                    if (err) {
                        return console.error('Cannot save URL:', err);
                    } else {
                        var shortUrl = 'https://bask-shorty-url.herokuapp.com/' + url.shortcode;
                        return res.json({
                            "original_url": url.originalUrl,
                            "short_url": shortUrl
                        });
                    }
                });
            }
        });
    } else {
        res.json({
            error: 'Wrong URL format. Insert both the protocol (http, https, etc.) and the site'
        }); 
    }
};

exports.redirect = function(req, res) {
    Url.findOne({ shortcode: req.params[0] }, function(err, url) {
        if (err) {
            return console.error(err);
        }

        if (url) {
            res.redirect(url.originalUrl);
        } else {
            return res.send("Sorry! Cannot redirect you from this short URL. URL not found.");
        }
    });
};