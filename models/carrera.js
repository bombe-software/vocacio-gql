const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carrera = mongoose.Schema({
    nombre: String,
    categoria: String;
    materias: [{
        type: Schema.Types.ObjectId,
        ref: 'materia'
    }]
});

mongoose.model('carrera', carrera);