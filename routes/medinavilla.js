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
            nombre: 'Administracion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ciencia de los Materiales I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Circuitos Electricos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ecuaciones Diferenciales',
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
            nombre: 'Metrologia Dimensional',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ciencia de los Materiales II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Dinamica de la Particula',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Humanidades III: Desarrollo Humano',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Maquinas Electricas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Mecanica de Materiales I',
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
            nombre: 'Dinamica de Cuerpo Rigido',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Electronica de Potencia Aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Mecanica de Fluidos I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Mecanica de Materiales II',
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
            nombre: 'Electronica Digital Aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Ingenieria de Manufactura I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Mecanica de Fluidos II',
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
            nombre: 'Probabilidad y Estadistica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Transferencia de Calor',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Analisis Economico',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Diseño de Elementos Mecanicos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Ingenieria de Manufactura II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Introduccion a Sistemas Automaticos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Maquinas Hidraulicas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Maquinas Termicas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Desarrollo Prospectivo de Proyectos o Topicos Selectos de Ingenieria I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Dinamica de Maquinaria',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Evaluacion de Proyectos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Humanidades IV: Desarrollo Personal y Profesional',
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
            nombre: 'Bombas Hidraulicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Diseño Mecanico I',
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
            nombre: 'Instalaciones Electricas',
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
            nombre: 'Sistemas de Calidad',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Tratamientos Termicos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Turbinas Termicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Control Numerico Computarizado',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Diseño de Elementos Termicos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Diseño de Herramental',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Diseño de Sistemas de Produccion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Fuentes Alternas de Energia',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Generadores de Vapor',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Ingenieria Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Manufactura Asistida por Computadora',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Motores de Combustion Interna',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Automatizacion de Procesos Industriales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Diseño Asistido por Computadora',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Instalaciones Mecanicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Instrumentacion y Control de Procesos Industriales',
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
            nombre: 'Metrologia Avanzada',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Sistemas Modernos de Produccion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Turbinas y Plantas Hidraulicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Humanidades V: El Humanismo frente a la Globalizacion',
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
            nombre: 'Proyecto de Ingeneria o Oopicos Selectos de Ingenieria II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Acondicionamiento de Aire',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Administracion de la Calidad',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Control y Proteccion de Motores Electricos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Diseño Mecanico II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Diseño, Seleccion y Aplicacion de Materiales',
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
            nombre: 'Hidraulica de Potencia',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Plantas de Bombeo',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Plantas Termicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Procesos Quimicos Industriales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Control Numerico Computarizado',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Diseño de Elementos Termicos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Diseño de Herramental',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Diseño de Sistemas de Produccion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Fuentes Alternas de Energia',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Generadores de Vapor',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Ingenieria Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Manufactura Asistida por Computadora',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Motores de Combustion Interna',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Automatizacion de Procesos Industriales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Diseño Asistido por Computadora',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Instalaciones Mecanicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Instrumentacion y Control de Procesos Industriales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Matematicas Avanzadas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Metrologia Avanzada',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Sistemas Modernos de Produccion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Turbinas y Plantas Hidraulicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
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
        nombre: 'Ingenieria en Robotica Industrial',
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
            nombre: 'Humanidades II: La Comunicacion y la Ingenieria ',
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
            nombre: 'Circuitos Electricos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ensaye de Materiales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ecuaciones Diferenciales',
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
            nombre: 'Ingenieria de Electricidad Aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ingenieria de Calidad',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ingenieria de Manufactura Aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Metrologia Dimensional',
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
            nombre: 'Control Numericos Computarizado',
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
            nombre: 'Mecanica de Fluidos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Mecanismos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Resistencia de Materiales II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Celulas de Manufactura',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Electronica Industrial',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Humanidades III: Desarrollo Humano',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Introduccion al Diseño de Elementos mecanicos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Oleohidraulica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Vibraciones Mecanicas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Analisis Cconomico',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Controladores Logicos Programables',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Diseño de Conjuntos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Interfases, Perifericos y Programacion I',
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
            nombre: 'Sistemas Flexibles de Manufactura',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Administracion Industrial I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Desarrollo Prospectivo de Proyecto',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Humanidades IV: Desarrollo Personal y Profesional',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Interfases, Perifericos y Programacion II',
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
            nombre: 'Proyectos de Inversion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Administracion de la Calidad',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Controladores Industriales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Ingenieria de Produccion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Ingenieria Asistida por Computadora',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Manufactura Automatizada',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Medio Ambiente',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Topicos Selectos de Dinamica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Topicos Selectos de Materiales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Topicos Selectos de Robotica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Topicos Selectos de Resistencia de Materiales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Administracion Industrial II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Automatizacion de Sistemas Industriales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Humanidades V: El Humanismo frente a la Globalizacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Proyecto de Ingenieria',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Sistemas de Control',
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
        nombre: 'Ingenieria en Sistemas automotrices',
        categoria: categorias[0]._id,
        semestres: 9,
        sede: sedes[5]._id,
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
            nombre: 'Metodos Numericos',
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
            nombre: 'Electricidad y Magnetismo',
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
            nombre: 'Analisis de Circuitos Electricos CD y CA',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Dinamica de Fluidos',
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
            nombre: 'Humanidades III: Desarrollo Humano',
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
            nombre: 'Introduccion a la Ciencia de los Materiales',
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
            nombre: 'Probabilidad y Estadistica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Resistencia de Materiales',
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
            nombre: 'Sistemas Automotrices',
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
            nombre: 'Electricidad y Electronica Automotriz',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Modelado y Simulacion Asistido por Computadora',
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
            nombre: 'Diseño Automotriz',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Dinamica del Vehiculo',
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
            nombre: 'Sistema de Suspension, Direccion y Frenos',
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
            nombre: 'Procesos de Manufactura Automotriz',
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
            nombre: 'Optativa: Topicos Selectos de Ingenieria I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Ingenieria Ambiental Automotriz',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Humanidades IV: Desarrollo Personal y Profesional',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'I: Tecnicas de Mecanizado',
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
            nombre: 'III: Metodos de Fabricacion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'I: Tecnologia de Materiales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'II: Tecnologia de Soldadura',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'III: Procesos de Conformado',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Topicos Selectos de Ingenieria e Ingenieria de Manufactura Automotriz I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Topicos Selectos de Ingenieria e Ingenieria de Iateriales Iutomotrices I',
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
            nombre: 'Optativa: Topicos Selectos de Ingenieria II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Evaluacion Cconomica de Proyectos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Humanidades V: El Humano frente a la Globalizacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'IV: Sistemas Flexibles de Manufactura',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'V: Diseño de Herremental Automotriz',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'VI: Robotica Automotriz',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'IV: Tecnicas de Caracterizacion de Materiales Automotrices',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'V: Tecnologia de Union en Materiales Automotrices',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'VI: Ensayo Selecto de Materiales Automotrices',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Topicos Selectos de Ingenieria e Ingenieria de Manufactura automotriz II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Topicos Selectos de Ingenieria e Ingenieria de Materiales Automotrices II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
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

    carrera = new Carrera({
        nombre: 'Ingenieria Ambiental',
        categoria: categorias[0]._id,
        semestres: 8,
        sede: sedes[8]._id,
        materias: []
    });
    materias = [
        {
            nombre: 'Biologia de Eucariotes',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Biologia y Sociedad',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Calculo Diferencial e Integral',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Comunicacion y Sistemas de Informacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fisica del Movimiento Aplicada',
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
            nombre: 'Programacion (taller)',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Quimica General Aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Metodos Numericos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Algebra Vectorial',
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
            nombre: 'Fisica de la Energia Aplicada',
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
            nombre: 'Metodos Cuantitativos Aplicados',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Quimica Organica Aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Relaciones Laborales',
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
            nombre: 'Aplicaciones Matematicas (taller)',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Balance de Materia y Energia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Etica (taller)',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Fenomenos de Transporte',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Fisicoquimica Ambiental',
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
            nombre: 'Instrumentacion y Control',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Microbiologia Ambiental',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Quimica Ambiental I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Quimica Ambiental II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Biologia Ambiental',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ingenieria Civil e Hidraulica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ingenieria Electromecanica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Mecanica de Fluidos y Solidos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Metodos Numericos (taller)',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Procesos de Transferencia de Calor',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Riego e Impacto Ambiental',
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
            nombre: 'Bioseparaciones Mecanicas',
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
            nombre: 'Laboratorio de Bioingenieria',
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
            nombre: 'Manejo Integral de Residuos I',
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
            nombre: 'Planificacion y Economia Ambiental',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Diseño de Experimentos en Sistemas Ambientales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Sistemas de Informacion Geografica y Percepcion Temota',
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
            nombre: 'Dinamica de Bioprocesos del Medio Ambiente (taller)',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Formulacion y Evaluacion de Proyectos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Ingenieria de Reactores y Bioreactores',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Laboratorio de Bioseparaciones',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Manejo Integral de Residuos II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Manejo Integral del Agua I',
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
            nombre: 'Seguridad e Higiene Industrial',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Sistema de Calidad',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Ingenieria Molecular',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Metodos Instrumentales Avanzados',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Diseño de Plantas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Diseño de Procesos y Equipo',
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
            nombre: 'Energia Alternas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Manejo Integral de la Calidad del Aire',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Manejo Integral del Agua II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Remediacion de Suelos y Acuiferos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Estancia de Titulacion',
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
        nombre: 'Ingenieria en Alimentos',
        categoria: categorias[0]._id,
        semestres: 7,
        sede: sedes[8]._id,
        materias: []
    });

    materias = [
        {
            nombre: 'Biologia Celular',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Biotecnologia y Sociedad',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Calculo Diferencial e Integral',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Comunicacion y Sistemas de Informacion (taller)',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fisica del Movimiento Aplicada',
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
            nombre: 'Quimica General Aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Algebra Vectorial',
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
            nombre: 'Metodos Cuantitativos',
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
            nombre: 'Quimica Organica Aplicada',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Relaciones Laborales',
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
            nombre: 'Aplicaciones Matematicas (taller)',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Balance de Materia y Energia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Etica (taller)',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Fisciquimica de Alimentos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Inocuidad Alimentaria',
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
            nombre: 'Quimica y Funcionalidad de los Alimentos',
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
            nombre: 'Ciencia y Tecnologia de Alimentos I',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Evaluacion Sensorial de los Alimentos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Envases y Embalajes',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Fenomenos de Transporte',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Fisiologia de la Nutricion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ingeneria Industrial',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Laboratorio de Bioingenieria',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Metodos Bumericos',
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
            nombre: 'Nuevos Metodos de Conservacion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 4
        },
        {
            nombre: 'Tecnologia de Bebidas no alcoholicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 4
        },
        {
            nombre: 'Tratamiento y Remediacion de Desechos de la Industria Alimentaria',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 4
        },
        {
            nombre: 'Ciencia y Tecnologia de Alimentos II',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Ciencia y Tecnologia de Alimentos III',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Ciencia y Tecnologia de Alimentos IV',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Dinamica y Control de Bioprocesos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Diseño de Experimentos (taller)',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Electromecanica de Procesos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Mecanica de Fluidos y Solidos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Planeacion del Riesgo e Impacto Ambiental',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Procesos de Transferencia de Calor',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Tecnologia Frigorifica',
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
            nombre: 'Legislacion Alimentaria',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Ingenieria Electrica y Electronica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Tecnologia de Productos Pesqueros',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Biotecnologia Alimentaria',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Bioseparaciones Mecanicas',
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
            nombre: 'Desarrollo de Productos',
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
            nombre: 'Laboratorio de Bioseparaciones',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Diseño de Plantas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Diseño de Procesos de Separacion',
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
            nombre: 'Estancia de Titulacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Formulacion y Evaluacion de Proyectos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Simulacion y Escalamiento de Procesos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Sintesis y Analisis de Bioprocesos',
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
        nombre: 'Ingenieria en Mecatronica',
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
            nombre: 'Analisis y Diseño de Programas',
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
            nombre: 'Analisis de Señales y Sistemas',
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
            nombre: 'Sim. Electronica y Diseño de Circuitos Impresos',
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
            nombre: 'Diseño Basico de Elementos de Maquinas',
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
            nombre: 'Microprocesadores, Microcontroladores e Interfaz',
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
            nombre: 'Sensores y Acondicionadores de Señal',
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
            nombre: 'Control Clasico',
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
            nombre: 'Diseño Avanzado de Elementos de Maquinas',
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
            nombre: 'Procesador Digital de Señales',
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
            nombre: 'Optativa III',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa IV',
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
            nombre: 'Optativa V',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa VI',
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
        nombre: 'Ingenieria Metalurgica',
        categoria: categorias[0]._id,
        semestres: 8,
        sede: sedes[8]._id,
        materias: []
    });

    materias = [
        {
            nombre: 'Quimica Metalurgica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Aplicaciones de Calculo',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Aplicaciones de Mecanica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Probabilidad y Estadistica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Aplicaciones de Electricidad y Magnetismo',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Balance de Materia y Energia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Aplicaciones Matematicas',
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
            nombre: 'Termodinamica Metalurgica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Electroquimica y Corrosion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Preparacion de Minerales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Microestructura y Propiedades de Metales y Aleaciones',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Interfases y Superficies',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Fenomenos de Transporte en la Metalurgia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Diagrama de Fases en Metalurgia',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Concentracion de Minerales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Metodos Numericos y Herramientas Computacionales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Propiedades Electromagneticas y Termicas de los Metales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Cinetica Metalurgica',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Moldeo y Fundicion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Flotacion de Minerales',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Transformaciones de Fase',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Procesos de Fundicion y Solidificacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Comportamiento Mecanico de Metales y Aleaciones',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Instrumentacion de Procesos Metalurgicos',
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
            nombre: 'Administracion de Calidad',
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
            nombre: 'Reduccion y Refinacion',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Procesamiento de Metales Base',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Tratamiento de Efluentes',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Proceso de Conformado',
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
            nombre: 'Planeacion Estrategica',
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
            nombre: 'Procesos Extractivos',
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
            nombre: 'Tratamientos Termicos',
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
            nombre: 'Toma de Decisiones',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Ingenieria de Costos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Administracion Financiera de Empresas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Ingenieria Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Administracion y Gestion ambiental',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Diseño de Plantas metalurgicas',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Proceso de Union y Soldaduras',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Modelado y Simulacion de procesos metalurgicos',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Proyecto Terminal',
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
            nombre: 'Señales y Sistemas de Control Clasico',
            carera: carrera._id,
            categoria: categorias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Señales y Vibraciones',
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
            nombre: 'Procesamiento Digital de Señales',
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
            nombre: 'Diseño de Administracion de Redes',
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
            nombre: 'Diseño I: Maquinas Estaticas',
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
            nombre: 'Diseño II: Maquinas Rotativas',
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
            nombre: 'Diseño Automotriz',
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