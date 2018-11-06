//Llamada de modelos
const mongoose = require('mongoose');
const async = require('async');
const Universidad = mongoose.model('universidad');
const Sede = mongoose.model('sede');
const Carrera = mongoose.model('carrera');
const Materia = mongoose.model('materia');
const Categoria = mongoose.model('categoria');


async function carga_carreras_vicroni(){
    let universidades;
    await Universidad.find({}, function (err, obj) {
        universidades = obj;
    });
    let categorias;
    await Categoria.find({}, function (err, obj) {
        categorias = obj;
    });
    let sedes;
    await Sede.find({}, function (err, obj) {
        sedes = obj;
    });

    const carrera = new Carrera({
        nombre: 'Ingeniería Mecatrónica',
        categoria: categorias[0]._id,
        semestres: 10,
        sede: sedes[1]._id,
        materias: []
    });
    await carrera.save(); 
    let materias = [ 
        {
        nombre: 'Calculo diferencial e integral',
        carera: carrera._id,
        categoria: categorias[0]._id,
        semestre: 1
        },
        {
            nombre: 'Algebra lineal y numeros complejos',
            carera: carrera._id,
            categoria: categorias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Mecanica de la particula',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Introduccion a la mecatronica',
            carera: carrera._id,
            categoria: categorias[8]._id,
            semestre: 1
        },
        {
            nombre: 'Estructura y propiedades de los materiales',
            carera: carrera._id,
            categoria: categorias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Herramientas computacionales',
            carera: carrera._id,
            categoria: categorias[7]._id,
            semestre: 1
        },
        {
            nombre: 'Introduccion a la programacion',
            carera: carrera._id,
            categoria: categorias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Dibujo asistido por computadora',
            carera: carrera._id,
            categoria: categorias[7]._id,
            semestre: 1
        },
        {
            nombre: 'Ecuaciones diferenciales',
            carera: carrera._id,
            categoria: categorias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Calculo vectorial',
            carera: carrera._id,
            categoria: categorias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Mecanica del cuerpo rigido',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Comunicacion oral y escrita',
            carera: carrera._id,
            categoria: categorias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Circuitos electricos',
            carera: carrera._id,
            categoria: categorias[5]._id,
            semestre: 2
        },
        {
            nombre: 'Manufactura',
            carera: carrera._id,
            categoria: categorias[5]._id,
            semestre: 2
        },
        {
            nombre: 'Analisis y diseño de programas',
            carera: carrera._id,
            categoria: categorias[6]._id,
            semestre: 2
        }
    ];
    let materias_ids = []
    await materias.map((item, index) => {
        const materia = new Materia(item);
        materias_ids.push(materia._id);
        materia.save()
            .then(item => {
                //console.log(item);
            });
    });
    carrera.materias = materias_ids;
    await carrera.save();

    let universidades;
    await Universidad.find({}, function (err, obj) {
        universidades = obj;
    });
    let categorias;
    await Categoria.find({}, function (err, obj) {
        categorias = obj;
    });
    let sedes;
    await Sede.find({}, function (err, obj) {
        sedes = obj;
    });

    carrera = new Carrera({
        nombre: 'Ingeniería Telematica',
        categoria: categorias[0]._id,
        semestres: 10,
        sede: sedes[1]._id,
        materias: []
    });
    await carrera.save(); 
    materias = [ 
        {
        nombre: 'Calculo diferencial e integral',
        carera: carrera._id,
        categoria: categorias[0]._id,
        semestre: 1
        },
        {
            nombre: 'Algebra lineal y numeros complejos',
            carera: carrera._id,
            categoria: categorias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Mecanica de la particula',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Introduccion a la mecatronica',
            carera: carrera._id,
            categoria: categorias[8]._id,
            semestre: 1
        },
        {
            nombre: 'Estructura y propiedades de los materiales',
            carera: carrera._id,
            categoria: categorias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Herramientas computacionales',
            carera: carrera._id,
            categoria: categorias[7]._id,
            semestre: 1
        },
        {
            nombre: 'Introduccion a la programacion',
            carera: carrera._id,
            categoria: categorias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Dibujo asistido por computadora',
            carera: carrera._id,
            categoria: categorias[7]._id,
            semestre: 1
        },
        {
            nombre: 'Ecuaciones diferenciales',
            carera: carrera._id,
            categoria: categorias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Calculo vectorial',
            carera: carrera._id,
            categoria: categorias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Mecanica del cuerpo rigido',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Comunicacion oral y escrita',
            carera: carrera._id,
            categoria: categorias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Circuitos electricos',
            carera: carrera._id,
            categoria: categorias[5]._id,
            semestre: 2
        },
        {
            nombre: 'Manufactura',
            carera: carrera._id,
            categoria: categorias[5]._id,
            semestre: 2
        },
        {
            nombre: 'Analisis y diseño de programas',
            carera: carrera._id,
            categoria: categorias[6]._id,
            semestre: 2
        }
    ];
    let materias_ids = []
    await materias.map((item, index) => {
        const materia = new Materia(item);
        materias_ids.push(materia._id);
        materia.save()
            .then(item => {
                //console.log(item);
            });
    });
    carrera.materias = materias_ids;
    await carrera.save();
}

exports.work = carga_carreras_vicroni;