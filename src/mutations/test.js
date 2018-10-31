//Funcion
//Librerias y configuraciones requeridas
/**
 * Mongoose

const mongoose = require('mongoose');
const UserConfirm = mongoose.model('usuario_confirmar');
 */

//Funcion
function test({ args, req }) {
    const {
        texto
    } = args;
    console.log(texto);
    return texto;
}

//Se exporta la funcion
module.exports = { test };