var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlSchema = mongoose.Schema({
    originalUrl: String,
    shortUrl: String
});

/*urlSchema.methods.getOriginalUrl = function() {
    return this.originalUrl;
}
*/
var Url = mongoose.model('Url', urlSchema);

module.exports = Url;