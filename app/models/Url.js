var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlSchema = mongoose.Schema({
    originalUrl: String,
    shortUrl: String
});
urlSchema.methods.showUrls = function() {
    var log = 'You can access ' +
        this.originalUrl + ' just by typing: ' + 
        this.shortUrl;
    console.log(log);
};
var Url = mongoose.model('Url', urlSchema);

module.exports = Url;