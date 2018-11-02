const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const universidad = mongoose.Schema({
    nombre: String,
    abreviacion: String,
    logo: String,
    sedes: [{
        type: Schema.Types.ObjectId,
        ref: 'sede'
    }]
});

mongoose.model('universidad', universidad);