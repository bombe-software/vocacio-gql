//Llamada de modelos
const mongoose = require('mongoose');
const async = require('async');
const Universidad = mongoose.model('universidad');
const Sede = mongoose.model('sede');
const Carrera = mongoose.model('carrera');
const Materia = mongoose.model('materia');
const Categoria = mongoose.model('categoria');


async function carga_carreras_medinavilla() {
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
        nombre: 'Ingenieria civil',
        categoria: categorias[0]._id,
        semestres: 10,
        sede: sedes[1]._id,
        materias: []
    });

    let materias = [
        {
            nombre: 'Expresion grafica I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fisica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Geologia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Herramientas computacionales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Matematicas I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Relaciones Humanas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Dinamica de la particula',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Matematicas II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Programacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Quimica basica y aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Sociologia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Transporte e ingenieria de transito',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Economia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Estatica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Expresion grafica II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ingenieria sanitaria y ambiental',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Matematicas III',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Topografia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Estructuras isostaticas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Geomatica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Hidraulica basica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Matematicas IV',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Mecanica de suelos I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Procedimientos constructivos I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Matematicas V',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Mecanica de suelos II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Movimientos de tierra',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Residuos solidos urbanos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Resistencia de materiales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Tuberias y canales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Fisica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Caminos y ferrocarriles',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Estructura y desarrollo de Mexico',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Estructuras de mamposteria',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Hidrologia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Ingenieria de sistemas I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Mecanica de suelos III',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Agua potable',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Analisis estructural',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Modelos estocasticos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Obras hidraulicas de captacion superficial',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Pavimentos y terracerias',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Procedimientos constructivos II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Administracion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Alcantarillado',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Estructuras de concreto',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Mecanica de rocas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Puentes',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Zonas de riego y drenaje',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Aeropuertos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Estructura de acero',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Instalaciones hidraulicas y sanitarias',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Metodologia de la investigacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Planeacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Hidraulica maritima',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 10
        },
        {
            nombre: 'Obras de infraestructura',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 10
        },
        {
            nombre: 'Optativa II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 10
        },
        {
            nombre: 'Optativa III',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 10
        }

    ];
    materias.map((item, index) => {
        const materia = new Materia(item);
        materia.save()
            .then(item => {
                //console.log(item);
            });
    });
    console.log('Hola');

    const carrera = new Carrera({
        nombre: 'Ingenieria mecanica',
        categoria: categorias[0]._id,
        semestres: 9,
        sede: sedes[5]._id,
        materias: []
    });

    let materias = [
        {
            nombre: 'Calculo diferencial e integral',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fisica clasica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de algebra',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de programacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Humanidades I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Quimica basica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Calculo vectorial',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Dibujo asistido por computadora',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Electricidad y magnetismo',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Humanidades II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Metodos numericos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Quimica aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Administracion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ciencia de los materiales I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Circuitos electricos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ecuaciones diferenciales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Estatica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Metrologia dimensional',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ciencia de los materiales II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Dinamica de la particula',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Humanidades III',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Maquinas electricas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Mecanica de materiales I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Termondinamica I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Dinamica de cuerpo rigido',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Electronica de potencia aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Mecanica de fluidos I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Mecanica de materiales II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Termodinamica II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Fisica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Electronica digital aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Ingenieria de manufactura II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Mecanica de fluidos II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Mecanismos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Probabilidad y estadistica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Transferencia de calor',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Analisis economico',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Disenio de elementos mecanicos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Ingenieria de manufactura II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Introduccion a sistemas automaticos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Maquinas hidraulicas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Maquinas termicas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Desarrollo prospectivo de proyectos o topicos selectos de ingenieria I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Dinamica de maquinaria',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Evaluacion de proyectos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Humanidades IV',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Humanidades V',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Proyecto de ingeneria o topicos selectos de ingenieria II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        }
    ];
    materias.map((item, index) => {
        const materia = new Materia(item);
        materia.save()
            .then(item => {
                //console.log(item);
            });
    });
    console.log('Hola');

    const carrera = new Carrera({
        nombre: 'Ingenieria en robotica industrial',
        categoria: categorias[0]._id,
        semestres: 9,
        sede: sedes[5]._id,
        materias: []
    });

    let materias = [
        {
            nombre: 'Calculo diferencial e integral',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fisica clasica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de algebra',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de programacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Humanidades I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Quimica basica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Calculo vectorial',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Dibujo asistido por computadora',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Electricidad y magnetismo',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Humanidades II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Metodos numericos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Quimica aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Circuitos electricos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ensaye de materiales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ecuaciones diferenciale',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Estatica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Instrumentacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Sistemas experimentales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Dinamica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ingenieria de electricidad aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ingenieria de calidad',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ingenieria de manufactura aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Metrologia dimensional',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Resistencia de materiales I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Control numericos computarizado',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Electronica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Mecanica de fluidos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Mecanicanismos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Resistencia de materiales II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Celulas de manufactura',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Electronica industrial',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Humanidades III',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Introduccion al disenio de elementos mecanicos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Oleohidraulico',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Vibraciones mecanicas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Analisis economico',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Controladores logicos programables',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Disenio de conjuntos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Interfases, perifericos y programacion I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Neumatica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Sistemas flexibles de manufactura',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Administracion industrial I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Desarrollo prospectivo de proyecto',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Humanidades IV',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Interfases, perifericos y programacion II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Proyectos de inversion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Administracion industrial II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Automatizacion de sistemas industriales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Humanidades V',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Proyecto de ingenieria',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Sistemas de control',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        }
    ];
    materias.map((item, index) => {
        const materia = new Materia(item);
        materia.save()
            .then(item => {
                //console.log(item);
            });
    });
    console.log('Hola');
    
    const carrera = new Carrera({
        nombre: 'Ingenieria en sistemas automotrices',
        categoria: categorias[0]._id,
        semestres: 9,
        sede: sedes[5]._id,
        materias: []
    });

    let materias = [
        {
            nombre: 'Calculo diferencial e integral',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fisica clasica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de algebra',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de programacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Humanidades I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Quimica basica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Calculo vectorial',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Ecuaciones diferenciales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Metodos numericos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Humanidades II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Electricidad y magnetismo',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Quimica aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Analisis de circuitos electricos CD y CA',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Dinamica de fluidos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Estatica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Humanidades III',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Termodinamica I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Introduccion a la ciencia de los materiales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Dinamica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Electronica I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Termodinamica II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Oleoneumatica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Probabilidad y estadistica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Resistencia de materiales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Elementos mecanicos automotrices',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Sistemas automotrices',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Transferencia de calor',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Electricidad y electronica automotriz',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Modelado y simulacion asistido por computadora',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Metrologia y normalizacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Disenio automotriz',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Dinamica del vehiculo',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Motores de combustion interna',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Sistema de suspension, direccion y frenos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Tren motriz',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Procesos de manufactura automotriz',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa III',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Topicos selectos de ingenieria I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Ingenieria ambiental automotriz',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Humanidades IV',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa IV',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa V',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa VI',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Topicos selectos de ingenieria II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Evaluacion economica de proyectos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Humanidades V',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Proyecto integrador',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        }
    ];
    materias.map((item, index) => {
        const materia = new Materia(item);
        materia.save()
            .then(item => {
                //console.log(item);
            });
    });
    console.log('Hola');

    const carrera = new Carrera({
        nombre: 'Ingenieria ambiental',
        categoria: categorias[0]._id,
        semestres: 8,
        sede: sedes[8]._id,
        materias: []
    });

    let materias = [
        {
            nombre: 'Biologia de eucariotes',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Biologia y sociedad',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Calculo diferencial e integral',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Comunicacion y sistemas de informacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fisica del movimiento aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Ingles I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Programacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Quimica general aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Metodos numericos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Humanidades II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Algebra vectorial',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Ecologia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Estadistica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Fisica de la energia aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Ingles II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Metodos cuantitativos aplicados',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Quimica organica aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Relaciones laborales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Termodinamica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Aplicaciones matematicas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Balance de materia y energia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ecuaciones diferenciales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Etica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Fenomenos de transporte',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Fisicoquimica ambiental',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ingles III',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Instrumentacion y control',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Microbiologia ambiental',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Quimica ambiental I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Quimica ambiental II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Biologia ambiental',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ingenieria civil e hidraulica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ingenieria electromecanica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Mecanica de fluidos y solidos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Metodos numericos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Procesos de transferencia de calor',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Riego e impacto ambiental',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Bioseparaciones fluido-fluido',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Bioseparaciones mecanicas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Bioseparaciones solido-fluido',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Laboratorio de bioingenieria',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Legislacion y politica ambiental',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Manejo integral de residuos I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Optativa I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Planificacion y economia ambiental',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Dinamica de bioprocesos del medio ambiente',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Formulacion y evaluacion de proyectos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Ingenieria de reactores y bioreactores',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Laboratorio de bioseparaciones',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Manejo integral de residuos II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Manejo integral del agua I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Seguridad e higuiene industrial',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Sistema de calidad',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Disenio de plantas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Disenio de procesos y equipo',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Electiva',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Energia alternas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Manejo integral de la calidad del aire',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Manejo integral del agua II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Remediacion de suelos y acuiferos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Estancia de titulacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
           ];
    materias.map((item, index) => {
        const materia = new Materia(item);
        materia.save()
            .then(item => {
                //console.log(item);
            });
    });
    console.log('Hola');

    const carrera = new Carrera({
        nombre: 'Ingenieria en alimentos',
        categoria: categorias[0]._id,
        semestres: 7,
        sede: sedes[8]._id,
        materias: []
    });

    let materias = [
        {
            nombre: 'Biologia celular',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Biotecnologia y sociedad',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Calculo diferencial e integral',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Comunicacion y sistemas de informacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fisica del movimiento aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Ingles I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Programacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Quimica general aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Algebra vectorial',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Estadistica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Ingles II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Metodos cuantitativos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Microbiologia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Quimica organica aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Relaciones laborales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Termodinamica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Aplicaciones matematicas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Balance de materia y energia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ecuaciones diferenciales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Etica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Fisciquimica de alimentos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Inocuidad alimentaria',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ingles III',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Quimica y funcionalidad de los alimentos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Termodinamica II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ciencia y tecnologia de alimentos I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Evaluacion sensorial de los alimentos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Envases y embalajes',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Fenomenos de transporte',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Fisiologia de la nutricion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ingeneria industrial',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Laboratorio de bioingenieria',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Metodos numericos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Optativa I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ciencia y tecnologia de alimentos II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Ciencia y tecnologia de alimentos III',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Ciencia y tecnologia de alimentos IV',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Dinamica y control de bioprocesos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Disenio de experimentos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Electromecanica de procesos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Mecanica de fluidos y solidos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Planeacion del riesgo e impacto ambiental',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Procesos de transferencia de calor',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Tecnologia frigorifica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Optativa II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Biotecnologia alimentaria',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Bioseparaciones mecanicas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Bioseparaciones fluido-fluido',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Bioseparaciones solido-fluido',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Desarrollo de productos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Electiva I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Laboratorio de bioseparaciones',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Disenio de plantas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Disenio de procesos de separacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Electiva II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Estancia de titulacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Formulacion y evaluacion de proyectos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Simulacion y escalamiento de procesos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Sintesis y analisis de bioprocesos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        }
           ];
    materias.map((item, index) => {
        const materia = new Materia(item);
        materia.save()
            .then(item => {
                //console.log(item);
            });
    });
    console.log('Hola');

    const carrera = new Carrera({
        nombre: 'Ingenieria en mecatronica',
        categoria: categorias[0]._id,
        semestres: 7,
        sede: sedes[8]._id,
        materias: []
    });

    let materias = [
        {
            nombre: 'Tiene niveles :V',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        }
           ];
    materias.map((item, index) => {
        const materia = new Materia(item);
        materia.save()
            .then(item => {
                //console.log(item);
            });
    });
    console.log('Hola');

    const carrera = new Carrera({
        nombre: 'Ingenieria metalurgica',
        categoria: categorias[0]._id,
        semestres: 8,
        sede: sedes[8]._id,
        materias: []
    });

    let materias = [
        {
            nombre: 'Quimica metalurgica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Aplicaciones de calculo',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Aplicaciones de mecanica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Probabilidad y estadistica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Aplicaciones de electricidad y magnetismo',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Balance de materia y energia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Aplicaciones matematicas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Analisis quimico de minerales, metales y aleaciones',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Mineralogia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Termodinamica metalurgica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Electroquimica y corrosion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Preparacion de minerales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Microestructura y propiedades de metales y aleaciones',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Interfases y superficies',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Fenomenos de transporte en la metalurgia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Diagrama de fases en metalurgia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Concentracion de minerales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Metodos numericos y herramientas computaciones',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Propiedades electromagneticas y termicas de los metales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Cinetica metalurgica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Moldeo y fundicion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Flotacion de minerales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Transformaciones de fase',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Procesos de fundicion y solidificacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Comportamiento mecanico de metales y aleaciones',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Instrumentacion de procesos metalurgicos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Optativa I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Hidrometalurgia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Reduccion y refinacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Procesamiento de metales base',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Tratamiento de efluentes',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Proceso de conformado',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Procesos extractivos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Aceracion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Electrometalurgia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Reciclado',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Tratamientos termicos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Disenio de plantas metalurgicas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Proceso de union y soldaduras',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Modelado y simulacion de procesos metalurgicos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Proyecto terminal',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        }
           ];
    materias.map((item, index) => {
        const materia = new Materia(item);
        materia.save()
            .then(item => {
                //console.log(item);
            });
    });
    console.log('Hola');

    const carrera = new Carrera({
        nombre: 'Ingenieria en sistemas computacionales',
        categoria: categorias[0]._id,
        semestres: 7,
        sede: sedes[8]._id,
        materias: []
    });

    let materias = [
        {
            nombre: 'Tiene niveles :V',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        }
           ];
    materias.map((item, index) => {
        const materia = new Materia(item);
        materia.save()
            .then(item => {
                //console.log(item);
            });
    });
    console.log('Hola');
}

exports.work = function () {
    carga_carreras_medinavilla();
};