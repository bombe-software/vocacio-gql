//Funcion
//Librerias y configuraciones requeridas
/**
 * Mongoose
    */
const mongoose = require('mongoose');
const Bug = mongoose.model('bug');
 

//Funcion
function add_bug({ args, req }) {
    const {
        comentario,
        estrellas
    } = args;
    const bug = new Bug({
        comentario, estrellas
    });
    
    bug.save();

    return Bug.findOne({comentario});
}

//Se exporta la funcion
module.exports = { add_bug };