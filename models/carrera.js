const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carrera = mongoose.Schema({
    nombre: String,
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'categoria'
    },
    semestres: Number,
    sede: {
        type: Schema.Types.ObjectId,
        ref: 'sede'
    },
    materias: [{
        type: Schema.Types.ObjectId,
        ref: 'materia'
    }]
});

mongoose.model('carrera', carrera);