//Llamada de modelos
const mongoose = require('mongoose');
const async = require('async');
const Universidad = mongoose.model('universidad');
const Sede = mongoose.model('sede');
const Carrera = mongoose.model('carrera');
const Materia = mongoose.model('materia');
const Categoria = mongoose.model('categoria');

async function carga_carreras_rubenhdez(categorias, categoria_materias, sedes){

    //** ENCB

    //! Licenciatura en Biología POR NIVELES 

    // Químico Bacteriólogo Parasitólogo
    let carrera = new Carrera({
        nombre: 'Químico Bacteriólogo Parasitólogo',
        categoria: categorias[1]._id,
        semestres: 10,
        sede: sedes[21]._id,
        materias: []
    });


    await carrera.save();

}

exports.work = carga_carreras_rubenhdez;