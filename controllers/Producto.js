var crypto = require('crypto');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Load required packages
var timestamps = require('mongoose-timestamp');
var metadata = require('../models/plugins/metadata');

var _Schema = new Schema({
    data:{ type : Object}
});

_Schema.pre('save', function (next) {
    next();
});

//add plugins
_Schema.plugin(metadata);
_Schema.plugin(timestamps);

module.exports = mongoose.model('Producto', _Schema);
