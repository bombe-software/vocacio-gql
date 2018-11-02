//Llamada de modelos
const mongoose = require('mongoose');
const async = require('async');
const Universidad = mongoose.model('universidad');
const Sede = mongoose.model('sede');
const Carrera = mongoose.model('carrera');
const Materia = mongoose.model('materia');
const Categoria = mongoose.model('categoria');

//Variables

//FUNCIÓN DE LOS ARRAYS: Para hacer que los registros cambien, simplemente se cambian las constantes array, las cuales se encuentran separadas por el tipo de registros
//que realizan, por ejemplo, universidades[] se encarga de registras universidades, así respectivamente
//ORDEN DE REGISTROS: El orden de registro se encuentra de mayor alcance a menor alcance, o sea, primero se registran las universidades, luego las 
//categorias, luego las sedes(campus), luego las carreras y al final las materias

//Array de Universidades
const universidades = [
    {
        nombre: "IPN",
        logo: "IPN.jpg"
    },
    {
        nombre: "UNAM",
        logo: "UNAM.jpg"
    }
];

//Array de Categorias
const categorias = [
    { nombre: 'Ciencias Matemáticas' },
    { nombre: 'Ciencias Biológicas' },
    { nombre: 'Ciencias Sociales' }
];

//Array de sedes
const sedes = [
    {
        nombre: 'UPIITA',
        logo: 'IPN.png',
        categoria: Categoria.findOne({ nombre: 'Ciencias Matemáticas' })._id,
        posicion: '19.820845, -99.203562',
        universidad: Universidad.findOne({ nombre: 'IPN' })._id
    },
    {
        nombre: 'Facultad de Ciencias',
        logo: 'UNAM.png',
        categoria: Categoria.findOne({ nombre: 'Ciencias Matemáticas' })._id,
        posicion: '19.820845, -99.203562',
        universidad: Universidad.findOne({ nombre: 'UNAM' })._id
    },
];

//Se encarga de que las funciones se ejecuten en serie
async.series({
    one: function (callback) {
        universidades.map((item, index) => {
            const universidad = new Universidad(item);
            //if (Universidad.findOne(item.nombre) == null || Universidad.findOne(item.nombre) == []){
            universidad.save()
                .then(item => {
                    console.log(item);
                });
            //}

            if ((index) == (universidades.length - 1)) {
                callback(null, 'one');
            }
        });
    },
    two: function(callback) {
        categorias.map((item, index) => {
            const categoria = new Categoria(item);
            //if (Categoria.findOne(item.nombre) == null || Categoria.findOne(item.nombre) == []) {
            categoria.save()
                .then(item => {
                    console.log(item);
                });
            //}

            if (index == (categorias.length - 1)) {
                callback(null, 'two');
            }
        });
    },
    three: function(callback) {
        sedes.map((item, index) => {
            const sede = new Sede(item);
            //if (Sede.findOne(item.nombre) == null || Sede.findOne(item.nombre) == []) {
            sede.save()
                .then(item => {
                    console.log(item);
                });
            //}

            if (index == (sedes.length - 1)) {
                callback(null, 'three');
            }
        });
    }
});

exports.registro = function (req, res) {
    
};