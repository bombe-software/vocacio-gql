const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materia = mongoose.Schema({
    nombre: String,
    etiqueta: String
});

mongoose.model('materia', materia);