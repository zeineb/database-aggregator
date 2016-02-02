var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new Schema({
    _id: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    seqid:  {
        type: Number,
        required: true,
        index: true
    },
    value: {
        type: Object,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    action: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
});
