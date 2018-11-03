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
        //Área Físico Matemática
        {
            nombre: 'Escuela Superior de Computo',
            abreviatura: 'ESCOM',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingeniería y Arquitectura Unidad Ticomán',
            abreviatura: 'ESIA',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Físico Matemáticas',
            abreviatura: 'ESFM',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingeniería y Arquitectura Unidad Zacatenco',
            abreviatura: 'ESIA',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingeniería Mecánica y Eléctrica Unidad Azcapotzalco',
            abreviatura: 'ESIME',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Unidad Profesional Interdisciplinaria de Biotecnología',
            abreviatura: 'UPIBI',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingeniería Mecánica y Eléctrica Unidad Culhuacán',
            abreviatura: 'ESIME',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Unidad Profesional Interdisciplinaria de Ingeniería Campus Zacatecas',
            abreviatura: 'UPIIZ',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingeniería Mecánica y Eléctrica Unidad Ticomán',
            abreviatura: 'ESIME',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas',
            abreviatura: 'UPIICSA',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingeniería Mecánica y Eléctrica Unidad Zacatenco',
            abreviatura: 'ESIME',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Unidad Profesional Interdisciplinaria de Ingeniería Campus Guanajuato',
            abreviatura: 'UPIIG',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingeniería Química e Industrías Extractivas',
            abreviatura: 'ESIQIE',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Unidad Profesional Interdisciplinaria en Ingenieria y Tecnologias Avanzadas',
            abreviatura: 'UPIITA',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingeniería Textil',
            abreviatura: 'ESIT',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingeniería y Arquitectura Unidad Tecamachalco',
            abreviatura: 'ESIA',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Unidad Profesional Interdisciplinaria de Ingeniería Campus Hidalgo',
            abreviatura: 'UPIIH',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        //Área Médico Biológicas
        {
            nombre: 'Centro Interdisciplinario de Ciencias de la Salud Unidad Milpa Alta',
            abreviatura: 'CICS',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Nacional de Medicina y Homeopatía',
            abreviatura: 'ENMyH',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Centro Interdisciplinario de Ciencias de la Salud Unidad Santo Tomás',
            abreviatura: 'CICS',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Enfermería y Obstetricia',
            abreviatura: 'ESEO',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Nacional de Ciencias Biológicas',
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
        //Área Sociales y Administrativas
        {
            nombre: 'Escuela Superior de Comercio y Administración Unidad Santo Tomás',
            abreviatura: 'ESCA',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Economía',
            abreviatura: 'ESE',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Comercio y Administración Unidad Tepepan',
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
            nombre: 'Facultad de Artes y Diseño',
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
            nombre: 'Facultad de Ciencias Políticas y Sociales',
            abreviatura: 'FCPyS',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Contaduría y Administración',
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
            nombre: 'Facultad de Economía',
            abreviatura: 'Facultad de Economía',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Estudios Superiores Acatlán',
            abreviatura: 'FES Acatlán',
            logo: '',
            categoria: categorias[4]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Estudios Superiores Aragón',
            abreviatura: 'FES Aragón',
            logo: '',
            categoria: categorias[4]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Estudios Superiores Cuautitlán',
            abreviatura: 'FES Cuautitlán',
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
            nombre: 'Facultad de Filosofía y Letras',
            abreviatura: 'FFyL',
            logo: '',
            categoria: categorias[3]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Ingeniería',
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
            nombre: 'Facultad de Música',
            abreviatura: 'FaM',
            logo: '',
            categoria: categorias[3]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Odontología',
            abreviatura: 'Facultad de Odontología',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Psicología',
            abreviatura: 'Facultad de Psicología',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Química',
            abreviatura: 'Facultad de Química',
            logo: '',
            categoria: categorias[4]._id,
            posicion: '',
            universidad: universidades[1]._id
        }
        //Escuelas
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
            console.log('Ya acabó');
            callback(null, 'final');
        }
    });
}

exports.registro = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    main(req, res);
    res.end();
};