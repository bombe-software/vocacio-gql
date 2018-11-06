//Llamada de modelos
const mongoose = require('mongoose');
const async = require('async');
const Universidad = mongoose.model('universidad');
const Sede = mongoose.model('sede');
const Carrera = mongoose.model('carrera');
const Materia = mongoose.model('materia');
const Categoria = mongoose.model('categoria');
const CategoriaMateria = mongoose.model('categoria_materia');

async function carga_universidades(req, res) {
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
    await universidades.map((item, index) => {
        const universidad = new Universidad(item);
        universidad.save()
            .then(item => {
                //console.log(item);
            });
    });
}

async function carga_categorias(req, res) {
    //Array de Categorias
    const categorias = [
        { nombre: 'Ciencias Fisico Matematicas' },
        { nombre: 'Ciencias Medico Biologicas' },
        { nombre: 'Ciencias Sociales y Administrativas' },
        { nombre: 'Humanidades y Artes' },
        { nombre: 'Interdisciplinaria' }
    ];
    await categorias.map((item, index) => {
        const categoria = new Categoria(item);
        categoria.save()
            .then(item => {
                //console.log(item);
            });
    });
}

async function carga_categoria_materias(req, res) {
    //Array de Categorias
    const categoria_materias = [
        { nombre: 'Matematicas' },
        { nombre: 'Fisica' },
        { nombre: 'Quimica' },
        { nombre: 'Humanidades y Artes' },
        { nombre: 'Biologia' },
        { nombre: 'Electronica' },
        { nombre: 'Programacion' },
        { nombre: 'Herramientas computacionales' },
        { nombre: 'Administracion' },
        { nombre: 'Optativa o electiva' },
        { nombre: 'Opcion de titulacion' },
        { nombre: 'Manufactura' }
    ];
    await categoria_materias.map((item, index) => {
        const categoria_materia = new CategoriaMateria(item);
        categoria_materia.save()
            .then(item => {
                //console.log(item);
            });
    });
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
        //Area Fisico Matematica
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
            nombre: 'Escuela Superior de Ingenieria y Arquitectura Unidad Ticoman',
            abreviatura: 'ESIA',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Fisico Matem�ticas',
            abreviatura: 'ESFM',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingenieria y Arquitectura Unidad Zacatenco',
            abreviatura: 'ESIA',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingenieria Mecanica y Electrica Unidad Azcapotzalco',
            abreviatura: 'ESIME',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Unidad Profesional Interdisciplinaria de Biotecnologia',
            abreviatura: 'UPIBI',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingenieria Mecanica y Electrica Unidad Culhuacan',
            abreviatura: 'ESIME',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Unidad Profesional Interdisciplinaria de Ingenieria Campus Zacatecas',
            abreviatura: 'UPIIZ',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingenieria Mec�nica y Electrica Unidad Ticoman',
            abreviatura: 'ESIME',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Unidad Profesional Interdisciplinaria de Ingenieria y Ciencias Sociales y Administrativas',
            abreviatura: 'UPIICSA',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingenieria Mecanica y Electrica Unidad Zacatenco',
            abreviatura: 'ESIME',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Unidad Profesional Interdisciplinaria de Ingenieria Campus Guanajuato',
            abreviatura: 'UPIIG',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingenieria Quimica e Industrias Extractivas',
            abreviatura: 'ESIQIE',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingenieria Textil',
            abreviatura: 'ESIT',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingenieria y Arquitectura Unidad Tecamachalco',
            abreviatura: 'ESIA',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Unidad Profesional Interdisciplinaria de Ingenieria Campus Hidalgo',
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
            nombre: 'Escuela Nacional de Medicina y Homeopatia',
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
            nombre: 'Escuela Superior de Enfermeria y Obstetricia',
            abreviatura: 'ESEO',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Nacional de Ciencias Biologicas',
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
            nombre: 'Escuela Superior de Comercio y Administracion Unidad Santo Tomas',
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
            nombre: 'Escuela Superior de Comercio y Administracion Unidad Tepepan',
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
            nombre: 'Facultad de Ciencias Politicas y Sociales',
            abreviatura: 'FCPyS',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Contaduria y Administracion',
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
            nombre: 'Facultad de Economia',
            abreviatura: 'Facultad de Economia',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Estudios Superiores Acatlan',
            abreviatura: 'FES Acatlan',
            logo: '',
            categoria: categorias[4]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Estudios Superiores Aragon',
            abreviatura: 'FES Aragon',
            logo: '',
            categoria: categorias[4]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Estudios Superiores Cuautitlan',
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
            nombre: 'Facultad de Filosofia y Letras',
            abreviatura: 'FFyL',
            logo: '',
            categoria: categorias[3]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Ingenieria',
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
            nombre: 'Facultad de Musica',
            abreviatura: 'FaM',
            logo: '',
            categoria: categorias[3]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Odontologia',
            abreviatura: 'Facultad de Odontologia',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Psicologia',
            abreviatura: 'Facultad de Psicologia',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Quimica',
            abreviatura: 'Facultad de Quimica',
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
    await sedes.map((item, index) => {
        const sede = new Sede(item);
        sede.save()
            .then(item => {
                //console.log(item);
            });
    });
};

async function main(req, res) {
    //Se encarga de que las funciones se ejecuten en serie
    await carga_universidades(req, res);
    await carga_categorias(req, res);
    await carga_sedes(req, res);
    await carga_categoria_materias(req, res);
    await require('./vicroni').work();
    console.log('Acabo');
} 

exports.registro = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    main(req, res);
    res.end(); 
};