var crypto = require('crypto');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Load required packages
var timestamps = require('mongoose-timestamp');
var metadata = require('../models/plugins/metadata');

var _Schema = new Schema({
    descripcion_larga : { type : String, trim : true, lowercase : true},
    descripcion_corta : { type : String, trim : true, lowercase : true},
    detalle : { type : String, trim : true, lowercase : true},
    caracteristicas : { type : String, trim : true, lowercase : true},
    referencia : { type : String, trim : true, lowercase : true},
    categoria : { type : String, trim : true, lowercase : true},
    precio : Number,
    iva : Number,
    precio_venta : Number,
    color : String,
    talla  : Array,
    unidad : Number,
    relacion : Array,
    imagenes : Array,
    data:{ type : Object},
    active : { type : Boolean, default : true}
});

_Schema.pre('save', function (next) {
    next();
});

//add plugins
_Schema.plugin(metadata);
_Schema.plugin(timestamps);

module.exports = mongoose.model('Producto', _Schema);
