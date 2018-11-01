const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const universidad = mongoose.Schema({
    nombre: String,
    abreviacion: String,
    logo: String,
    campus: [{
        type: Schema.Types.ObjectId,
        ref: 'campus'
    }]
});

mongoose.model('universidad', universidad);