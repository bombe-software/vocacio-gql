const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoria = mongoose.Schema({
    nombre: String,
    logo: String
});

mongoose.model('categoria', categoria);