let mongoose = require('mongoose');
let airlineModel = mongoose.Schema({
    date: String,
    flight_number: String,
    description: String,
    severity: String,
    status: String

},

{
    collection:"incidents"
});

module.exports = mongoose.model('airline',airlineModel);