//Llamada de modelos
const mongoose = require('mongoose');
const async = require('async');
const Universidad = mongoose.model('universidad');
const Sede = mongoose.model('sede');
const Carrera = mongoose.model('carrera');
const Materia = mongoose.model('materia');
const Categoria = mongoose.model('categoria');

function carga_universidades(req, res) {
    //Array de Universidades
    const universidades = [
        {
            nombre: "Instituto Politecnico Nacional",
            abreviatura: "IPN",
            logo: "IPN.jpg"
        },
        {
            nombre: "Universidad Autonoma de Mexico",
            abreviatura: "UNAM",
            logo: "UNAM.jpg"
        }
    ];
    universidades.map((item, index) => {
        const universidad = new Universidad(item);
        universidad.save()
            .then(item => {
                //console.log(item);
            });
    });
    carga_categorias(req, res);
}

function carga_categorias(req, res) {
    //Array de Categorias
    const categorias = [
        { nombre: 'Ciencias Fisico Matematicas' },
        { nombre: 'Ciencias Medico Biologicas' },
        { nombre: 'Ciencias Sociales y Administrativas' }
    ];
    categorias.map((item, index) => {
        const categoria = new Categoria(item);
        categoria.save()
            .then(item => {
                //console.log(item);
            });
    });
    carga_sedes(req, res);
}

async function carga_sedes(req, res) {
    let universidades;
    await Universidad.find({}, function (err, obj) {
        universidades = obj;
    });
    let categorias;
    await Categoria.find({}, function (err, obj) {
        categorias = obj;
    });
    const sedes = [
        {
            nombre: 'Unidad Profesional Interdisciplinaria en Ingenieria y Tecnologias Avanzadas',
            abreviatura: 'UPIITA',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Facultad de Ciencias',
            abreviatura: 'Facultad de Ciencias',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Escuela Superior de Computo',
            abreviatura: 'ESCOM',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        }
    ];
    sedes.map((item, index) => {
        const sede = new Sede(item);
        sede.save()
            .then(item => {
                //console.log(item);
            });
    });
};
function main(req, res) {
    //Se encarga de que las funciones se ejecuten en serie
    async.series({
        uno: function (callback) {
            carga_universidades(req, res);
            callback(null, 'uno');
        },
        dos: function (callback) {
            carga_categorias(req, res);
            callback(null, 'dos');
        },
        tres: function (callback) {
            carga_sedes(req, res);
            callback(null, 'tres');
        },
        final: function (callback) {
            console.log('Ya acabo');
            callback(null, 'final');
        }
    });
}

exports.registro = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    main(req, res);
    res.end();
};