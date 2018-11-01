const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materia = mongoose.Schema({
    nombre: String,
    categoria: String,
    semestre: Number
});

mongoose.model('materia', materia);