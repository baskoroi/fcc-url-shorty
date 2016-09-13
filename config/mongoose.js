var mongoose = require('mongoose');

module.exports = function() {
    var dbUrl = process.env.MONGOLAB_URI;
    mongoose.connect(dbUrl);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'DB connection error:'));
    db.once('open', function() {
        console.log('Connected to DB!');
    });

    require('../app/models/Url.js');
};