const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materia = mongoose.Schema({
    nombre: String,
    carera: {
        type: Schema.Types.ObjectId,
        ref: 'carera'
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'sede'
    },
    semestre: Number
});

mongoose.model('materia', materia);