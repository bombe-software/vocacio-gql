const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carrera = mongoose.Schema({
    nombre: String,
    categoria: String,
    materias: [{
        type: Schema.Types.ObjectId,
        ref: 'materia'
    }],
    campus: {
        type: Schema.Types.ObjectId,
        ref: 'campus'
    },
    semestres: Number
});

mongoose.model('carrera', carrera);