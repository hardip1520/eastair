let mongoose = require('mongoose');
let airlineModel = mongoose.Schema({
    date: String,
    flight: String,
    description: String,
    severity: String,
    status: String

},

{
    collection:"incident"
});

module.exports = mongoose.model('airline',airlineModel);