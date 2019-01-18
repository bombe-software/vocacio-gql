const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bug = mongoose.Schema({
    comentario: String,
    estrellas: Number
});

mongoose.model('bug', bug);