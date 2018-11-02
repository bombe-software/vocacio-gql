const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sede = mongoose.Schema({
    nombre: String,
    logo: String,
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'sede'
    },
    posicion: String,
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'universidad'
    },
    carreras: [{
        type: Schema.Types.ObjectId,
        ref: 'carrera'
    }]
});

mongoose.model('sede', sede);