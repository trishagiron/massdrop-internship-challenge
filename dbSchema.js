var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var URLqueueData = new Schema({
    url: {
        type: String
    },
    status: {
        type: String
    },
    HTMLdata: {
        type: String
    }
})

var URLdata = mongoose.model('urldata', URLqueueData);

module.exports = URLdata;
