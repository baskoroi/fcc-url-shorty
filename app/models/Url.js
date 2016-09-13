var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlSchema = new mongoose.Schema({
    originalUrl: String,
    shortcode: String
});

var Url = mongoose.model('Url', urlSchema);

module.exports = Url;