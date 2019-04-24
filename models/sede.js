const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sede = mongoose.Schema({
    nombre: String,
    abreviatura: String,
    logo: String,
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'categoria'
    },
    posicion: String,
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'universidad'
    },
    eficiencia_terminal: Number,
    carreras: [{
        type: Schema.Types.ObjectId,
        ref: 'carrera'
    }],
});

mongoose.model('sede', sede);