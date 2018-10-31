const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campus = mongoose.Schema({
    nombre: String,
    categoria: String,
    carreras: [{
        type: Schema.Types.ObjectId,
        ref: 'carrera'
    }]
});

mongoose.model('campus', campus);