'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({
    type: {
        type: String,
        enum: ['source', 'aggregation'],
        index: true,
        required: true
    },
    operation: {
        type: String,
        enum: ['update', 'delete'],
        index: true,
        required: true
    },
    status: String,
    date: {
        type: Date,
        required: true,
        index: true
    },
    name: {
        type: String,
        index: true,
        required: true
    }
});