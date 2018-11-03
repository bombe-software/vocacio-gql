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
        { nombre: 'Ciencias Sociales y Administrativas' },
        { nombre: 'Humanidades y Artes' },
        { nombre: 'Interdisciplinaria' }
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
        //Escuelas del IPN
        //�rea F�sico Matem�tica
        {
            nombre: 'Escuela Superior de Computo',
            abreviatura: 'ESCOM',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        //Vicroni
        {
            nombre: 'Unidad Profesional Interdisciplinaria en Ingenieria y Tecnologias Avanzadas',
            abreviatura: 'UPIITA',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingenier�a y Arquitectura Unidad Ticom�n',
            abreviatura: 'ESIA',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de F�sico Matem�ticas',
            abreviatura: 'ESFM',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingenier�a y Arquitectura Unidad Zacatenco',
            abreviatura: 'ESIA',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingenier�a Mec�nica y El�ctrica Unidad Azcapotzalco',
            abreviatura: 'ESIME',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Unidad Profesional Interdisciplinaria de Biotecnolog�a',
            abreviatura: 'UPIBI',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingenier�a Mec�nica y El�ctrica Unidad Culhuac�n',
            abreviatura: 'ESIME',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Unidad Profesional Interdisciplinaria de Ingenier�a Campus Zacatecas',
            abreviatura: 'UPIIZ',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingenier�a Mec�nica y El�ctrica Unidad Ticom�n',
            abreviatura: 'ESIME',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Unidad Profesional Interdisciplinaria de Ingenier�a y Ciencias Sociales y Administrativas',
            abreviatura: 'UPIICSA',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingenier�a Mec�nica y El�ctrica Unidad Zacatenco',
            abreviatura: 'ESIME',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Unidad Profesional Interdisciplinaria de Ingenier�a Campus Guanajuato',
            abreviatura: 'UPIIG',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingenier�a Qu�mica e Industr�as Extractivas',
            abreviatura: 'ESIQIE',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingenier�a Textil',
            abreviatura: 'ESIT',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingenier�a y Arquitectura Unidad Tecamachalco',
            abreviatura: 'ESIA',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Unidad Profesional Interdisciplinaria de Ingenier�a Campus Hidalgo',
            abreviatura: 'UPIIH',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        //�rea M�dico Biol�gicas
        {
            nombre: 'Centro Interdisciplinario de Ciencias de la Salud Unidad Milpa Alta',
            abreviatura: 'CICS',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Nacional de Medicina y Homeopat�a',
            abreviatura: 'ENMyH',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Centro Interdisciplinario de Ciencias de la Salud Unidad Santo Tom�s',
            abreviatura: 'CICS',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Enfermer�a y Obstetricia',
            abreviatura: 'ESEO',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Nacional de Ciencias Biol�gicas',
            abreviatura: 'ENCB',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Medicina',
            abreviatura: 'ESM',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        //�rea Sociales y Administrativas
        {
            nombre: 'Escuela Superior de Comercio y Administraci�n Unidad Santo Tom�s',
            abreviatura: 'ESCA',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Econom�a',
            abreviatura: 'ESE',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Comercio y Administraci�n Unidad Tepepan',
            abreviatura: 'ESCA',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Turismo',
            abreviatura: 'EST',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        //Escuelas de la UNAM
        //Facultades
        {
            nombre: 'Facultad de Arquitectura',
            abreviatura: 'Facultad de Arquitectura',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Artes y Dise�o',
            abreviatura: 'FAD',
            logo: '',
            categoria: categorias[3]._id,
            posicion: '',
            universidad: universidades[1]._id
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
            nombre: 'Facultad de Ciencias Pol�ticas y Sociales',
            abreviatura: 'FCPyS',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Contadur�a y Administraci�n',
            abreviatura: 'FCA',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Derecho',
            abreviatura: 'Facultad de Derecho',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Econom�a',
            abreviatura: 'Facultad de Econom�a',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Estudios Superiores Acatl�n',
            abreviatura: 'FES Acatl�n',
            logo: '',
            categoria: categorias[4]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Estudios Superiores Arag�n',
            abreviatura: 'FES Arag�n',
            logo: '',
            categoria: categorias[4]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Estudios Superiores Cuautitl�n',
            abreviatura: 'FES Cuautitl�n',
            logo: '',
            categoria: categorias[4]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Estudios Superiores Iztacala',
            abreviatura: 'FES Iztacala',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Estudios Superiores Zaragoza',
            abreviatura: 'FES Zaragoza',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Filosof�a y Letras',
            abreviatura: 'FFyL',
            logo: '',
            categoria: categorias[3]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Ingenier�a',
            abreviatura: 'FI',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Medicina',
            abreviatura: 'FacMed',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Medicina Veterinaria y Zootecnia',
            abreviatura: 'FMVZ',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de M�sica',
            abreviatura: 'FaM',
            logo: '',
            categoria: categorias[3]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Odontolog�a',
            abreviatura: 'Facultad de Odontolog�a',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Psicolog�a',
            abreviatura: 'Facultad de Psicolog�a',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Qu�mica',
            abreviatura: 'Facultad de Qu�mica',
            logo: '',
            categoria: categorias[4]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        //Escuelas
        {
            nombre: 'Escuela Nacional de Enfermería y Obstetricia',
            abreviatura: 'ENEO',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Escuela Nacional de Estudios Superiores Unidad León',
            abreviatura: 'ENES, Leon',
            logo: '',
            categoria: categorias[4]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Escuela Nacional de Estudios Superiores, Unidad Morelia',
            abreviatura: 'ENES, Morelia',
            logo: '',
            categoria: categorias[4]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Escuela Nacional de Lenguas, Lingüística y Traducción',
            abreviatura: 'ENALLT',
            logo: '',
            categoria: categorias[3]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        ,
        {
            nombre: 'Escuela Nacional de Trabajo Social',
            abreviatura: 'Escuela Nacional de Trabajo Social',
            logo: '',
            categoria: categorias[3]._id,
            posicion: '',
            universidad: universidades[1]._id
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
    //main(req, res);
    /**
     * Correr metodo por metodo
     */
    //carga_universidades(req, res);
    //carga_categorias(req, res);
    //carga_sedes(req, res);
    require('./vicroni').work();
    res.end();
};