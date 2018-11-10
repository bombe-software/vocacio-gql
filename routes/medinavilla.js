//Llamada de modelos
const mongoose = require('mongoose');
const async = require('async');
const Universidad = mongoose.model('universidad');
const Sede = mongoose.model('sede');
const Carrera = mongoose.model('carrera');
const Materia = mongoose.model('materia');
const Categoria = mongoose.model('categoria');


async function carga_carreras_medinavilla(categorias, categoria_materias, sedes) {

    let carrera = new Carrera({
        nombre: 'Ingenieria mecanica',
        categoria: categorias[0]._id,
        semestres: 9,
        sede: sedes[5]._id,
        materias: []
    });

    let materias = [
        {
            nombre: 'Calculo Diferencial e Integral',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fisica Clasica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Algebra',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Programacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Humanidades I: Ingenieria Ciencia y Sociedad',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Quimica Basica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Calculo Vectorial',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Dibujo Asistido por Computadora',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Electricidad y Magnetismo',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Humanidades II: La Comunicacion y la Ingenieria',
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
            nombre: 'Bombas hidraulicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Diseno Mecanico I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Ingenieria Quimica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Instalaciones electricas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Mecanica de Materiales III',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Neumatica industrial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Refrigeracion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Sistemas de calidad',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Tratamientos termicos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Turbinas termicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Control numerico computarizado',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Diseno de elementos termicos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Diseno de herramental',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Disenio de sistemas de produccion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Fuentes alternas de energia',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Generadores de vapor',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Ingenieria ambiental',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Manufactura asistida por computadora',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Motores de combustion interna',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Automatizacion de procesos industriales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Disenio asistido por computadora',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Instalaciones mecanicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Instrumentacion y control de procesos industriales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Matematicas Avanzadas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Metrologia avanzada',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Sistemas modernos de produccion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Turbinas y plantas hidraulicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
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
        },
        {
            nombre: 'Acondicionamiento de aire',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Administracion de la calidad',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Control y proteccion de motores',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Diseno Mecanico II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Diseno, seleccion y aplicacion de materiales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Estructuras',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Hidraulica de potencia',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Plantas de bombeo',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Plantas termicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Procesos quimicos industriales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Control numerico computarizado',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Diseno de elementos termicos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Diseno de herramental',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Disenio de sistemas de produccion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Fuentes alternas de energia',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Generadores de vapor',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Ingenieria ambiental',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Manufactura asistida por computadora',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Motores de combustion interna',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Automatizacion de procesos industriales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Disenio asistido por computadora',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Instalaciones mecanicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Instrumentacion y control de procesos industriales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Matematicas Avanzadas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Metrologia avanzada',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Sistemas modernos de produccion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Turbinas y plantas hidraulicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
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

    carrera = new Carrera({
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
            nombre: 'Administracion de la calidad',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Controladores industriales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Ingenieria de produccion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Ingenieria asistida por computadora',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Manufactura automatizada',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Medio ambiente',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Topicos selectos de dinamica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Topicos selectos de materiales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Topicos selectos de robotica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Topicos selectos de resistencia de materiales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
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
    materias_ids = []
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

    carrera = new Carrera({
        nombre: 'Ingenieria en sistemas automotrices',
        categoria: categorias[0]._id,
        semestres: 9,
        sede: sedes[5]._id,
        materias: []
    });

    materias = [
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
            nombre: 'Optativa: Topicos selectos de ingenieria I',
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
            nombre: 'I: Tecnicas de mecanizado',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'II: Ingenieria de Autopartes',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'III: Metodos de fabricacion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'I: Tecnologia de materiales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'II: Tecnologia de soldadura',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'III: Procesos de conformado',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Topicos selectos de ingenieria e ingenieria de manufactura autmotriz I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Topicos selectos de ingenieria e ingenieria de materiales automotrices I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
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
            nombre: 'Optativa: Topicos selectos de ingenieria II',
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
            nombre: 'IV: Sistemas flexibles de manufactura',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'V: Disenio de herremental automotriz',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'VI: Robotico automotriz',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'IV: Tecnicas de caracterizacion de materiales automotrices',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'V: Tecnologia de union en materiales automotrices',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'VI: Ensayo selecto de materiales automotrices',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Topicos selectos de ingenieria e ingenieria de manufactura autmotriz II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Topicos selectos de ingenieria e ingenieria de materiales automotrices II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Proyecto integrador',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        }
    ];
    materias_ids = []
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

    carrera = new Carrera({
        nombre: 'Ingenieria ambiental',
        categoria: categorias[0]._id,
        semestres: 8,
        sede: sedes[8]._id,
        materias: []
    });
    materias = [
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
            nombre: 'Disenio de experimentos en sistemas ambientales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Sistemas de informacion geografica y percepcion remota',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Toxicologia',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
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
            nombre: 'Ingenieria molecular',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Metodos instrumentales avanzados',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
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
    materias_ids = []
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

    carrera = new Carrera({
        nombre: 'Ingenieria en alimentos',
        categoria: categorias[0]._id,
        semestres: 7,
        sede: sedes[8]._id,
        materias: []
    });

    materias = [
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
            nombre: 'Confiteria',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 4
        },
        {
            nombre: 'Reologia de alimentos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 4
        },
        {
            nombre: 'Nuevos metodos de conservacion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 4
        },
        {
            nombre: 'Tecnologia de bebidas no alcoholicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 4
        },
        {
            nombre: 'Tratamiento y remediacion de desechos de la industria alimentaria',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
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
            nombre: 'Legislacion alimentaria',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Ingenieria electrica y electronica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Tecnologia de productos pesqueros',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
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
    materias_ids = []
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

    carrera = new Carrera({
        nombre: 'Ingenieria en mecatronica',
        categoria: categorias[0]._id,
        semestres: 7,
        sede: sedes[8]._id,
        materias: []
    });

    materias = [
        {
            nombre: 'Calculo Diferencial e Integral',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Algebra Lineal y Numeros Complejos',
            carera: carrera._id,
            categoria: categorias[1]._id,
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
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Estructura y Propiedades de los Materiales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Herramientas Computacionales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Introduccion a la Programacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Dibujo Asisitido por Computadora',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Calculo Vectorial',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Mecanica del Cuerpo Rigido',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Comunicacion Oral y Escrita',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Circuitos Electricos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Procesos de Manufactura',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Analisis y Disenio de Programas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Electricidad y Magnetismo',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Circuitos Electricos Avanzados',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Fundamentos de Electronica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Mantenimiento y Sistemas de Manufactura',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Analisis y Sintesis de Mecanismos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Analisis de Senales y Sistemas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Resistencia de materiales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ingles II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Termodinamica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Probabilidad y Estadistica para Ingenieria',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Electronica Analogica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Sim. Electronica y Disenio de Circuitos Impresos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Oscilaciones y Optica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Programacion Avanzada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Mecanica de Fluidos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Teoria Electromagnetica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Disenio Basico de Elementos de Maquinas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Administracion Organizacional',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Microprocesadores, Microcontroladores e interfaz',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Circuitos logicos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Modelado y Simulacion de Sistemas Mecatronicos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Etica para el Ejercicio Profesional',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Electronica de Potencia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Sensores y Acondicionadores de Senal',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Neumatica e Hidraulica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Dispositivos Logicos Programables',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Ingles III',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Maquinas Electricas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Instrumentacion Virtual',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Control clasico',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Finanzas e Ingenieria Economica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Disenio Avanzado de Elementos de Maquinas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Sistemas Neurodifusos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Liderazgo y Emprendedores',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Proyecto Integrador',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa 1',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa 2',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Procesador Digital de Senales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Ingenieria Asistida por Computadora',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Control de Maquinas Electricas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Automatizacion Industrial',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Ingenieria Ambiental',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa 3',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa 4',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Proyectos de Inversion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Metodologia de la Investigacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Sistemas de Vision Artificial',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Control de Sistemas Mecatronicos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa 5',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa 6',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Servicio Social',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Trabajo Terminal I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Trabajo Terminal II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 10
        },
    ];
    materias_ids = []
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

    carrera = new Carrera({
        nombre: 'Ingenieria metalurgica',
        categoria: categorias[0]._id,
        semestres: 8,
        sede: sedes[8]._id,
        materias: []
    });

    materias = [
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
            nombre: 'Comercializacion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Administracion de calidad',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Recursos naturales y Desarrollo sustentable',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
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
            nombre: 'Desarrrollo Organizacional',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Planeacion estrategica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Energias Alternas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
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
            nombre: 'Desarrollo de Empresas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Toma de decisiones',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Ingenieria de costos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Administracion financiera de Empresas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Ingenieria ambiental',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Administracion y gestion ambiental',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
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
    materias_ids = []
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

    carrera = new Carrera({
        nombre: 'Ingenieria en Comunicaciones y Electronica',
        categoria: categorias[0]._id,
        semestres: 7,
        sede: sedes[8]._id,
        materias: []
    });

    materias = [
        {
            nombre: 'Calculo Diferencial e Integral',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fisica Clasica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Algebra',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Programacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Humanidades I: Ingenieria, Ciencia y Sociedad',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Quimica Basica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Calculo Vectorial',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Electricidad y Magnetismo',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Humanidades II: La Comunicacion y la Ingenieria',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Programacion Orientada a Objetos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Quimica Aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Campos y Ondas Electromagnetica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Circuitos de CA y CD',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Estructuras y Base de Datos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ondas Mecanicas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Transformadas de Funciones',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Variable Compleja',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Analisis Numerico',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Analisis Numerico',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Economia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Mecanica Cuantica y Estadistica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Mediciones',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ondas Electromagneticas Guiadas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Probabilidad y Estadistica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Teoremas de Circuitos Electricos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Administracion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Analisis de Transitorios',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Circuitos Digitales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Dispositivos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Fundamentos de Maquinas Electricos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Comunicaciones Analogicas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Teoria de Radiadores Electromagneticos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Electronica Lineal',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Electronica Digital',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Microprocesadores',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Comunicaciones Digitales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Senales y Sistemas de Control Clasico',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Senales y Vibraciones',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Electroacusticas y Transductores',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Espacio de Estados',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Generacion y Evaluacion de Proyectos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Humanidades III: Desarollo Humano',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Microcontroladores',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Procesamiento Digital de Senales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Redes Basicas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Desarollo Prospectivo de Proyectos o Topicos Selectos de Ingenieria I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Humanidades IV: Desarollo Personal y Profesional',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Calidad en la Ingenieria',
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
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Acustica Arquitectural',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Grabacion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Metrologia Acustica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Psicoacustica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Arquitectura de Computadoras',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Ingenieria de Software',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Lenguajes de Internet',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Redes LAN',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Instrumentacion I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Instrumentacion II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Electronica de Potencia I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Transmisores',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Electronica Analogicca de Comunicaciones',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Comunicaciones por Medio de Fibra Optica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Redes de Area Amplia',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Teoria de Codificacion y Manejo Informacion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Control Analogico. Servomecanismos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Control con uso de PLC',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Control Digital',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Instrumentacion de Procesos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Humanidades V: El Humanismo Frente a la Globalizacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Ingenieria Economica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Proyecto de Ingenieria o Topicos Selectos de Ingenieria II',
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
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Acustica Musical',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Bioacustica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Reconocimiento y Sintesis de Voz',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Ruido Y Vibraciones',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Aplicaciones de Redes de Computo',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Agentes Inteligentes Expertos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Sistemas en Tiempo Real',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Vision por Computadora',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Electronica de Potencia II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Instrumentacion III',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Receptores',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Television y Video',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Diseno de Administracion de Redes',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Redes Convergentes',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Sincronizacion y Multiplexaje',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Sistemas de Radiocomunicacion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Control Distribuido',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Control Inteligente',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Sistemas No Lineales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Sistemas de Adquisicion de Datos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        }
    ];
    materias_ids = []
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

    carrera = new Carrera({
        nombre: 'Ingenieria en Control y Automatizacion',
        categoria: categorias[0]._id,
        semestres: 7,
        sede: sedes[8]._id,
        materias: []
    });

    materias = [
        {
            nombre: 'Calculo Diferencial e Integral',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fisica Clasica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Algebra',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Programacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Humanidades I: Ingenieria, Ciencia y Sociedad',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Quimica Basica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Calculo Vectorial',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Electricidad y Magnetismo',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Humanidades II: La Comunicacion y la Ingenieria',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Programacion Orientada a Objetos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Quimica Aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Analisis Numerico',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Variable Compleja y Transfomradas de Forurier y Z',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Fisca Moderna',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Teoria de los Circuitos I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Practicas de DAC',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Economia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Humanidades III: Desarrollo Humano',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Teoria de los Circuitos II',
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
            nombre: 'Modelado de Sistemas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Circuitos Logicos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Calidad Total y Productividad',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Probabilidad y Estadistica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Maquinas Electricas I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Electronica Operacional',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Teoria de Control I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Elementos Primarios de Medicion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Ingenieria Economica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Preparacion y Transporte de Materiales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Maquinas Electricas II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Maquinas Electricas II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Teoria del Control II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Electronica II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Elementos de Transmision y Control',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Metodologia de la Investigacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Operaciones de Separacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Teoria del Control III',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Instalaciones Electricas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Tecnologia de Mecanismos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Interfases y Microcontroladores',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Instrumentos Analiticos de Medicion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Administracion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Control de Procesos I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Control de Maquinas y Procesos Electricos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Mercadotecnia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Geeracion y Evaluacion de Proyectos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Proyecto Terminal I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Control de Procesos II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Planeacion e Ingenieria de Mantenimiento',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Comunicaciones Industriales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Proyecto Terminal II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Humanidades IV: Desarrollo Personal y Profesional',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Administracion Aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        }
    ];
    materias_ids = []
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

    carrera = new Carrera({
        nombre: 'Ingenieria electrica',
        categoria: categorias[0]._id,
        semestres: 7,
        sede: sedes[8]._id,
        materias: []
    });

    materias = [
        {
            nombre: 'Calculo Diferencial e Integral',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fisica Clasica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Algebra',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Programacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Humanidades I: Ingenieria, Ciencia y Sociedad',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Quimica Basica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Calculo Vectorial',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Electricidad y Magnetismo',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Humanidades II: La Comunicacion y la Ingenieria',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Programacion Orientada a Objetos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Quimica Aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Metodos Numericos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Variable Compleja y Transfomradas de Forurier y Z',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Fisca Moderna',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Humanidades III: Desarrollo Humano',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Mecanica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Probabilidad y Estadistica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Analisis  de Circuitos Electricos I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Conversion de la Energia I',
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
            nombre: 'Humanidades IV: Desarrollo Personal y Profesional',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Materiales Electotecnicos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Teoria de Resistencia de Materiales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Analisis de Circuitos Electricos III',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Conversion de la Energia II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Electronica II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Equipo electrico',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Instalaciones Electrica en Baja Tension',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Metodologia de la Investigacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Analisis de Circuitos Electricos III',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Conversion de la Energia III',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Electronica III',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Elementos de Control Electrico',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Instalaciones Electricas en Alta Tension',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Teoria General de Sistemas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Accionamiento y Controles Electricos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Administracion y Ahorra de Energia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Economia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Fuentes de Generacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Generacion y Evaluacion de Proyectos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Lineas y Redes de Distribucion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Mediciones Electricas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Ingenieria Industrial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Sistemas de Proteccion y Calidad',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Sistema de Traccion Electrica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Analisis de Sistemas Electricos de Potencia I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Desarrollo Prospectivo de Proyectos o Topicos Selectos de Energia I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Humanidades V: El Humanismo Frente a la Globalizacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Ingenieria Economica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Proteccion de Sistemas Electricos I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Tecnicas de las Altas Tensiones I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Disenio I: Maquinas Estaticas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Electronica de Potencia',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Sistemas de Iluminacion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Administracion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Computacion Aplicada a Sistemas Electricos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Instalaciones Electricas Especiales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa III',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Proteccion de Sistemsa Electricos II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Proyecto de Ingenieria o Topicos Selectos de Ingenieria II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Analisis de Sistemas Electricos de Potencia II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Disenio II: Maquinas Rotativas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Puesta de Servicio e Ingenieria de Mantenimiento',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Tecnicas de las Altas Tensiones II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
    ];
    materias_ids = []
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

    carrera = new Carrera({
        nombre: 'Ingenieria en Sistemas Automotrices',
        categoria: categorias[0]._id,
        semestres: 7,
        sede: sedes[8]._id,
        materias: []
    });

    materias = [
        {
            nombre: 'Calculo Diferencial e Integral',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fisica Clasica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Algebra',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Programacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Humanidades I: Ingenieria, Ciencia y Sociedad',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Quimica Basica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Calculo Vectorial',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Electricidad y Magnetismo',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Humanidades II: La Comunicacion y la Ingenieria',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Metodos Numericos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Quimica Aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Dinamica de Fluidos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Introduccion a la ciencia de los Materiales',
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
            nombre: 'Humanidades III: Desarrollo Humano',
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
            nombre: 'Analisis de Circuitos de CA y CD',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Oleoneumatica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Resistencia de Materiales I',
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
            nombre: 'Probabilidad y Estadistica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Elementos Mecanicos Automotrices',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Sistema Automotrices',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Transferencia de Calor',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Electricidad y Electronoca Automotriz',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Modelado y Simulacion Asistidos por Computadora',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Metrologia y Normalizacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Disenio Automotriz',
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
            nombre: 'Motores de Combustion Interna',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Sistemas de Suspension, Direccion y Frenos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Tren Motriz',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Procesos de manufactura Automotriz',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa I Teoria del Control',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa II Electronica Operacional y de Potencia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa III Interfaces y Microcontroladores',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Topicos de Sistemas I-Control de Sistemas Termodinamicos del Automovil I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Obligatoria Ingenieria Ambiental Automotriz',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Obligatoria Humanidades IV Desarrollo Personal y Profesional',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Obligatoria Evaluacion Economica de Proyectos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Humanidades V, Humanidades Frente a la Globalizacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Topicos Selectos II. Control de Sistemas Dinamicos del Automovil II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Automoviles Electricos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Control de Sistemas Termodinamicos del Automovil II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Instrumentacion Automotriz',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Sistema de Control de Modelos Auomotrices',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Proyecto Integrador',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        }

    ];
    materias_ids = []
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

exports.work = function () {
    carga_carreras_medinavilla();
};