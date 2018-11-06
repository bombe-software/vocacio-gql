const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoria_materia = mongoose.Schema({
    nombre: String
});

mongoose.model('categoria_materia', categoria_materia);