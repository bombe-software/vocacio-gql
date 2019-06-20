//Llamada de modelos
const mongoose = require('mongoose');
const async = require('async');
const Universidad = mongoose.model('universidad');
const Sede = mongoose.model('sede');
const Carrera = mongoose.model('carrera');
const Materia = mongoose.model('materia');
const Categoria = mongoose.model('categoria');


async function carga_carreras_medinavilla(categorias, categoria_materias, sedes) {

    //Ingeniería Mecánica
    let carrera = new Carrera({
        nombre: 'Ingeniería Mecánica',
        categoria: categorias[0]._id,
        semestres: 9,
        sede: sedes[5]._id,
        materias: []
    });

    await carrera.save();

    let materias = [
        {
            nombre: 'Cálculo Diferencial e Integral',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Física Clásica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Álgebra',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Programación',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Humanidades I: Ingeniería Ciencia y Sociedad',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Química Básica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo Vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Dibujo asistido por Computadora',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 2
        },
        {
            nombre: 'Electricidad y Magnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Humanidades II: La Comunicación y la Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Métodos Numéricos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Química Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Administración',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Ciencia de los Materiales I',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Circuitos Eléctricos',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 3
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Estática',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Metrología Dimensional',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ciencia de los Materiales II',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 4
        },
        {
            nombre: 'Dinámica de la Partícula',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Humanidades III: Desarrollo Humano',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Máquinas Eléctricas',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 4
        },
        {
            nombre: 'Mecánica de Materiales I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Termodinámica I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Dinámica de Cuerpo Rígido',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Electrónica de Potencia Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Mecánica de Fluidos I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Mecánica de Materiales II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Termodinámica II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Electrónica Digital Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Ingeniería de Manufactura I',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 6
        },
        {
            nombre: 'Mecánica de Fluidos II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Mecanismos',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Probabilidad y Estadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 6
        },
        {
            nombre: 'Transferencia de Calor',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Análisis Económico',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Diseño de Elementos Mecánicos',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Ingeniería de Manufactura II',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 7
        },
        {
            nombre: 'Introducción a Sistemas Automáticos',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 7
        },
        {
            nombre: 'Máquinas Hidráulicas',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 7
        },
        {
            nombre: 'Máquinas Térmicas',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 7
        },
        {
            nombre: 'Desarrollo Prospectivo de Proyectos o Tópicos Selectos de Ingeniería I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 8
        },
        {
            nombre: 'Dinámica de Maquinaria',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 8
        },
        {
            nombre: 'Evaluación de Proyectos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Humanidades IV: Desarrollo Personal y Profesional',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Bombas Hidráulicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Diseño Mecánico I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Ingeniería Química',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Instalaciones Eléctricas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Mecánica de Materiales III',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Neumática Industrial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Refrigeración',
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
            nombre: 'Tratamientos Térmicos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Turbinas Térmicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Control Numérico Computarizado',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Diseño de Elementos Térmicos',
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
            nombre: 'Diseño de Sistemas de Producción',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Fuentes Alternas de Energía',
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
            nombre: 'Ingeniería Ambiental',
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
            nombre: 'Motores de Combustión Interna',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Automatización de Procesos Industriales',
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
            nombre: 'Instalaciones Mecánicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Instrumentación y Control de Procesos Industriales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Matemáticas Avanzadas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Metrología Avanzada',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Sistemas Modernos de Producción',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Turbinas y Plantas Hidráulicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Humanidades V: El Humanismo frente a la Globalización',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Proyecto de Ingenería o Tópicos Selectos de Ingeniería II',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Acondicionamiento de Aire',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Administración de la Calidad',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Control y Protección de Motores Eléctricos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Diseño Mecánico II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Diseño, Selección y Aplicación de Materiales',
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
            nombre: 'Hidráulica de Potencia',
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
            nombre: 'Plantas Térmicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Procesos Químicos Industriales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Control Numérico Computarizado',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Diseño de Elementos Térmicos',
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
            nombre: 'Diseño de Sistemas de Producción',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Fuentes Alternas de Energía',
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
            nombre: 'Ingeniería Ambiental',
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
            nombre: 'Motores de Combustión Interna',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Automatización de Procesos Industriales',
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
            nombre: 'Instalaciones Mecánicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Instrumentación y Control de Procesos Industriales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Matemáticas Avanzadas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Metrología Avanzada',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Sistemas Modernos de Producción',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Turbinas y Plantas Hidráulicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
    ];

    materias_ids = [];

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

    //Ingeniería en Robótica Industrial
    carrera = new Carrera({
        nombre: 'Ingeniería en Robótica Industrial',
        categoria: categorias[0]._id,
        semestres: 9,
        sede: sedes[5]._id,
        materias: []
    });

    await carrera.save();
    materias = [
        {
            nombre: 'Cálculo Diferencial e Integral',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Física Clásica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Álgebra',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Programación',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Humanidades I: Ingeniería, Ciencia y Sociedad',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Química Básica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo Vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Dibujo Asistido por Computadora',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 2
        },
        {
            nombre: 'Electricidad y Magnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Humanidades II: La Comunicación y la Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Métodos Numéricos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Química Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Circuitos Eléctricos',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 3
        },
        {
            nombre: 'Ensaye de Materiales',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Estática',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Instrumentación',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Sistemas Experimentales',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Dinámica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ingeniería de Electricidad Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ingeniería de Calidad',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Ingeniería de Manufactura Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 4
        },
        {
            nombre: 'Metrología Dimensional',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Resistencia de Materiales I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Control Numérico Computarizado',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 5
        },
        {
            nombre: 'Electrónica',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Mecánica de Fluidos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Mecanismos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Resistencia de Materiales II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Células de Manufactura',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Electrónica Industrial',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Humanidades III: Desarrollo Humano',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Introducción al Diseño de Elementos Mecánicos',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 6
        },
        {
            nombre: 'Oleohidráulica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Vibraciones Mecánicas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Análisis Económico',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 7
        },
        {
            nombre: 'Controladores Lógicos Programables',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Diseño de Conjuntos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Interfases, Periféricos y Programación I',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 7
        },
        {
            nombre: 'Neumática',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Sistemas Flexibles de Manufactura',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 7
        },
        {
            nombre: 'Administración Industrial I',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Desarrollo Prospectivo de Proyectos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Humanidades IV: Desarrollo Personal y Profesional',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 8
        },
        {
            nombre: 'Interfases, Periféricos y Programación II',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Proyectos de Inversión',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Administración de la Calidad',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Controladores Industriales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Ingeniería de Producción',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Ingeniería Asistida por Computadora',
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
            nombre: 'Tópicos Selectos de Dinámica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Tópicos Selectos de Materiales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Tópicos Selectos de Robótica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Tópicos Selectos de Resistencia de Materiales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Administración Industrial II',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Automatización de Sistemas Industriales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Humanidades V: El Humanismo frente a la Globalización',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 9
        },
        {
            nombre: 'Proyecto de Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Sistemas de Control',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        }
    ];

    materias_ids = [];

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

    //Ingeniería en Sistemas Automotrices
    carrera = new Carrera({
        nombre: 'Ingeniería en Sistemas Automotrices',
        categoria: categorias[0]._id,
        semestres: 9,
        sede: sedes[5]._id,
        materias: []
    });

    await carrera.save();
    materias = [
        {
            nombre: 'Cálculo Diferencial e Integral',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Física Clásica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Álgebra',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Programación',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Humanidades I: Ingeniería, Ciencia y Sociedad',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Química Básica',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo Vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Métodos Numéricos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Humanidades II: La Comunicación y la Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Electricidad y Magnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Química Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Análisis de Circuitos Eléctricos CD y CA',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 3
        },
        {
            nombre: 'Dinámica de Fluidos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Estática',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Humanidades III: Desarrollo Humano',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Termodinámica I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Introducción a la Ciencia de los Materiales',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Dinámica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Electrónica I',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 4
        },
        {
            nombre: 'Termodinámica II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Oleoneumática',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Probabilidad y Estadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Resistencia de Materiales',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Elementos Mecánicos Automotrices',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Sistemas Automotrices',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Transferencia de Calor',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Electricidad y Electrónica Automotriz',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Modelado y Simulación Asistido por Computadora',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 5
        },
        {
            nombre: 'Metrología y Normalización',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Diseño Automotriz',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 6
        },
        {
            nombre: 'Dinámica del Vehiculo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Motores de Combustión Interna',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Sistema de Suspensión, Dirección y Frenos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Tren Motriz',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Procesos de Manufactura Automotriz',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa III',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa: Tópicos Selectos de Ingeniería I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Ingeniería Ambiental Automotriz',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Humanidades IV: Desarrollo Personal y Profesional',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'I: Técnicas de Mecanizado',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'II: Ingeniería de Autopartes',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'III: Métodos de Fabricación',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'I: Tecnología de Materiales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'II: Tecnología de Soldadura',
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
            nombre: 'Tópicos Selectos de Ingeniería e Ingeniería de Manufactura Automotriz I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Tópicos Selectos de Ingeniería e Ingeniería de Materiales Automotrices I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa IV',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa V',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa VI',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa: Tópicos Selectos de Ingeniería II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Evaluación Económica de Proyectos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Humanidades V: El Humano frente a la Globalización',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
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
            nombre: 'VI: Robótica Automotriz',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'IV: Técnicas de Caracterización de Materiales Automotrices',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'V: Tecnología de Unión en Materiales Automotrices',
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
            nombre: 'Tópicos Selectos de Ingeniería e Ingeniería de Manufactura Automotriz II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Tópicos Selectos de Ingeniería e Ingeniería de Materiales Automotrices II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Proyecto Integrador',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 9
        }
    ];

    materias_ids = [];

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

    //Ingeniería Ambiental
    carrera = new Carrera({
        nombre: 'Ingeniería Ambiental',
        categoria: categorias[0]._id,
        semestres: 8,
        sede: sedes[8]._id,
        materias: []
    });

    await carrera.save();
    materias = [
        {
            nombre: 'Biología de Eucariotes',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 1
        },
        {
            nombre: 'Biología y Sociedad',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo Diferencial e Integral',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Comunicación y Sistemas de Información',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Física del Movimiento Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Inglés I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Programación (Taller)',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Química General Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Métodos Numéricos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Álgebra Vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Ecología',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 2
        },
        {
            nombre: 'Estadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Física de la Energía Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Inglés II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Métodos Cuantitativos Aplicados',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Química Orgánica Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Relaciones Laborales',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Termodinámica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Aplicaciones Matematicas (Taller)',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Balance de Materia y Energía',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Ética (Taller)',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Fenómenos de Transporte',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 3
        },
        {
            nombre: 'Fisicoquímica Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Inglés III',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Instrumentación y Control',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Microbiología Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Química Ambiental I',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Química Ambiental II',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Biología Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 4
        },
        {
            nombre: 'Ingeniería Civil e Hidráulica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ingeniería Electromecánica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Mecánica de Fluidos y Sólidos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Métodos Numéricos (Taller)',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Procesos de Transferencia de Calor',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Riego e Impacto Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 4
        },

        {
            nombre: 'Bioseparaciones Fluido - Fluido',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Bioseparaciones Mecánicas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Bioseparaciones Sólido - Fluido',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Laboratorio de Bioingeniería',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 5
        },
        {
            nombre: 'Legislación y Política Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Manejo Integral de Residuos I',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Optativa I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Planificación y Economía Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Diseño de Experimentos en Sistemas Ambientales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Sistemas de Información Geográfica y Percepción Remota',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Toxicología',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Dinámica de Bioprocesos del Medio Ambiente (Taller)',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 6
        },
        {
            nombre: 'Formulación y Evaluación de Proyectos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Ingeniería de Reactores y Bioreactores',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 6
        },
        {
            nombre: 'Laboratorio de Bioseparaciones',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 6
        },
        {
            nombre: 'Manejo Integral de Residuos II',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Manejo Integral del Agua I',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Seguridad e Higiene Industrial',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Sistema de Calidad',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Ingeniería Molecular',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Métodos Instrumentales Avanzados',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Diseño de Plantas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Diseño de Procesos y Equipo',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Electiva',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Energía Alternas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Manejo Integral de la Calidad del Aire',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 7
        },
        {
            nombre: 'Manejo Integral del Agua II',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Remediación de Suelos y Acuíferos',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 7
        },
        {
            nombre: 'Estancia de Titulación',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 8
        },
    ];

    materias_ids = [];

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

    //Ingeniería en Alimentos
    carrera = new Carrera({
        nombre: 'Ingeniería en Alimentos',
        categoria: categorias[1]._id,
        semestres: 7,
        sede: sedes[8]._id,
        materias: []
    });

    await carrera.save();
    materias = [
        {
            nombre: 'Biología Celular',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 1
        },
        {
            nombre: 'Biotecnología y Sociedad',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo Diferencial e Integral',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Comunicación y Sistemas de Información (Taller)',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Física del Movimiento Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Inglés I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Programación',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Química General Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Álgebra Vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Estadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Inglés II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Métodos Cuantitativos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Microbiología',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 2
        },
        {
            nombre: 'Química Orgánica Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Relaciones Laborales',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Termodinámica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Aplicaciones Matematicas (Taller)',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Balance de Materia y Energía',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Ética (Taller)',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Fisicoquímica de Alimentos',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Inocuidad Alimentaria',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Inglés III',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Química y Funcionalidad de los Alimentos',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Termodinámica II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Ciencia y Tecnología de Alimentos I',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 4
        },
        {
            nombre: 'Evaluación Sensorial de los Alimentos',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 4
        },
        {
            nombre: 'Envases y Embalajes',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Fenómenos de Transporte',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 4
        },
        {
            nombre: 'Fisiología de la Nutrición',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 4
        },
        {
            nombre: 'Ingenería Industrial',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Laboratorio de Bioingeniería',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 4
        },
        {
            nombre: 'Métodos Numéricos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Optativa I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 4
        },
        {
            nombre: 'Confiteria',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 4
        },
        {
            nombre: 'Reología de Alimentos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 4
        },
        {
            nombre: 'Nuevos Métodos de Conservación',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 4
        },
        {
            nombre: 'Tecnología de Bebidas no Alcohólicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 4
        },
        {
            nombre: 'Tratamiento y Remediación de Desechos de la Industria Alimentaria',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 4
        },
        {
            nombre: 'Ciencia y Tecnología de Alimentos II',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 5
        },
        {
            nombre: 'Ciencia y Tecnología de Alimentos III',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 5
        },
        {
            nombre: 'Ciencia y Tecnología de Alimentos IV',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 5
        },
        {
            nombre: 'Dinámica y Control de Bioprocesos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Diseño de Experimentos (Taller)',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Electromecánica de Procesos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Mecánica de Fluidos y Sólidos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Planeación del Riesgo e Impacto Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Procesos de Transferencia de Calor',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Tecnología Frigorífica',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 5
        },
        {
            nombre: 'Optativa II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Legislación Alimentaria',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Ingeniería Eléctrica y Electrónica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Tecnología de Productos Pesqueros',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Biotecnología Alimentaria',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 6
        },
        {
            nombre: 'Bioseparaciones Mecánicas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Bioseparaciones Fluido - Fluido',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Bioseparaciones Sólido - Fluido',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Desarrollo de Productos',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 6
        },
        {
            nombre: 'Electiva I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Laboratorio de Bioseparaciones',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Diseño de Plantas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Diseño de Procesos de Separación',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Electiva II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Estancia de Titulación',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 7
        },
        {
            nombre: 'Formulación y Evaluación de Proyectos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Simulación y Escalamiento de Procesos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Síntesis y Análisis de Bioprocesos',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 7
        }
    ];

    materias_ids = [];
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

    //Ingeniería en Mecatrónica
    carrera = new Carrera({
        nombre: 'Ingeniería en Mecatrónica',
        categoria: categorias[0]._id,
        semestres: 7,
        sede: sedes[8]._id,
        materias: []
    });

    await carrera.save();
    materias = [
        {
            nombre: 'Cálculo Diferencial e Integral',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Álgebra Lineal y Números Complejos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Mecánica de la Partícula',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Introducción a la Mecatrónica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Estructura y Propiedades de los Materiales',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Herramientas Computacionales',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 1
        },
        {
            nombre: 'Introducción a la Programación',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Dibujo Asisitido por Computadora',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 1
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Cálculo Vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Mecánica del Cuerpo Rigido',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Comunicación Oral y Escrita',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Circuitos Eléctricos',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 2
        },
        {
            nombre: 'Procesos de Manufactura',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 2
        },
        {
            nombre: 'Análisis y Diseño de Programas',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 2
        },
        {
            nombre: 'Electricidad y Magnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Circuitos Eléctricos Avanzados',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 3
        },
        {
            nombre: 'Fundamentos de Electrónica',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 3
        },
        {
            nombre: 'Mantenimiento y Sistemas de Manufactura',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 3
        },
        {
            nombre: 'Análisis y Síntesis de Mecanismos',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 3
        },
        {
            nombre: 'Análisis de Señales y Sistemas',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 3
        },
        {
            nombre: 'Resistencia de materiales',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Inglés II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Termodinámica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Probabilidad y Estadística para Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Electrónica Analógica',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 4
        },
        {
            nombre: 'Sim. Electrónica y Diseño de Circuitos Impresos',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 4
        },
        {
            nombre: 'Oscilaciones y Óptica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Programación Avanzada',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 4
        },
        {
            nombre: 'Mecánica de Fluidos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Teoría Electromagnética',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Diseño Básico de Elementos de Máquinas',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 5
        },
        {
            nombre: 'Administración Organizacional',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Microprocesadores, Microcontroladores e Interfaz',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Circuitos Lógicos',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Modelado y Simulación de Sistemas Mecatrónicos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Ética para el Ejercicio Profesional',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Electrónica de Potencia',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Sensores y Acondicionadores de Señal',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Neumática e Hidráulica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Dispositivos Lógicos Programables',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Inglés III',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Máquinas Eléctricas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Instrumentación Virtual',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Control Clásico',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Finanzas e Ingeniería Económica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Diseño Avanzado de Elementos de Máquinas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Sistemas Neurodifusos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Liderazgo y Emprendedores',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Proyecto Integrador',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Procesador Digital de Señales',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Ingeniería Asistida por Computadora',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Control de Máquinas Eléctricas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Automatización Industrial',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Ingeniería Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa III',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa IV',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Proyectos de Inversión',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Metodología de la Investigación',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Sistemas de Visión Artificial',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Control de Sistemas Mecatrónicos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa V',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa VI',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Servicio Social',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 9
        },
        {
            nombre: 'Trabajo Terminal I',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 9
        },
        {
            nombre: 'Trabajo Terminal II',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 10
        },
    ];

    materias_ids = [];

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

    //Ingeniería Metalúrgica
    carrera = new Carrera({
        nombre: 'Ingeniería Metalúrgica',
        categoria: categorias[0]._id,
        semestres: 8,
        sede: sedes[8]._id,
        materias: []
    });
    await carrera.save();

    materias = [
        {
            nombre: 'Química Metalúrgica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Aplicaciones de Cálculo',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Aplicaciones de Mecánica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Probabilidad y Estadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Aplicaciones de Electricidad y Magnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Balance de Materia y Energía',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Aplicaciones Matematicas',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Análisis Químico de Minerales, Metales y Aleaciones',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Mineralogía',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Termodinámica Metalúrgica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Electroquímica y Corrosión',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Preparación de Minerales',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Microestructura y Propiedades de Metales y Aleaciones',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Interfases y Superficies',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Fenómenos de Transporte en la Metalurgia',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Diagrama de Fases en Metalurgia',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Concentración de Minerales',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Métodos Numéricos y Herramientas Computacionales',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 4
        },
        {
            nombre: 'Propiedades Electromagnéticas y Térmicas de los Metales',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Cinética Metalúrgica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Moldeo y Fundición',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Flotación de Minerales',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Transformaciones de Fase',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Procesos de Fundición y Solidificación',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Comportamiento Mecánico de Metales y Aleaciones',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Instrumentación de Procesos Metalúrgicos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Optativa I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Comercialización',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Administración de Calidad',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Recursos Naturales y Desarrollo Sustentable',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Hidrometalúrgia',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Reducción y Refinación',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Procesamiento de Metales Base',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Tratamiento de Efluentes',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Proceso de Conformado',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Desarrrollo Organizacional',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Planeación Estrategica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Energías Alternas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Procesos Extractivos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Aceración',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Electrometalúrgia',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Reciclado',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 7
        },
        {
            nombre: 'Tratamientos Térmicos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
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
            nombre: 'Ingeniería de Costos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Administración Financiera de Empresas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Ingeniería Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Administración y Gestion Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Diseño de Plantas Metalúrgicas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Proceso de Unión y Soldaduras',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Modelado y Simulación de Procesos Metalúrgicos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Proyecto Terminal',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
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

    //Ingeniería en Comunicaciones y Electrónica
    carrera = new Carrera({
        nombre: 'Ingeniería en Comunicaciones y Electrónica',
        categoria: categorias[0]._id,
        semestres: 9,
        sede: sedes[11]._id,
        materias: []
    });
    await carrera.save();

    materias = [
        {
            nombre: 'Cálculo Diferencial e Integral',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Física Clásica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Álgebra',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Programación',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Humanidades I: Ingeniería, Ciencia y Sociedad',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Química Básica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo Vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Electricidad y Magnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Humanidades II: La Comunicación y la Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Programación Orientada a Objetos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 2
        },
        {
            nombre: 'Química Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Campos y Ondas Electromagnética',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Circuitos de CA y CD',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 3
        },
        {
            nombre: 'Estructuras y Base de Datos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 3
        },
        {
            nombre: 'Ondas Mecánicas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Transformadas de Funciones',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Variable Compleja',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Análisis Numérico',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Análisis Numérico',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Economía',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Mecánica Cuantica y Estadística',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Mediciones',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ondas Electromagnéticas Guiadas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Probabilidad y Estadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Teoremas de Circuitos Eléctricos',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 4
        },
        {
            nombre: 'Administración',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Análisis de Transitorios',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Circuitos Digitales',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Dispositivos',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Fundamentos de Máquinas Eléctricos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 5
        },
        {
            nombre: 'Comunicaciones Analógicas',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Teoría de Radiadores Electromagneticos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Electrónica Lineal',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Electrónica Digital',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Microprocesadores',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Comunicaciones Digitales',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Señales y Sistemas de Control Clásico',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Señales y Vibraciones',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Electroacusticas y Transductores',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Espacio de Estados',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Generación y Evaluación de Proyectos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Humanidades III: Desarollo Humano',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Microcontroladores',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Procesamiento Digital de Señales',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Redes Básicas',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 7
        },
        {
            nombre: 'Desarollo Prospectivo de Proyectos o Tópicos Selectos de Ingeniería I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Humanidades IV: Desarollo Personal y Profesional',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 8
        },
        {
            nombre: 'Calidad en la Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Acústica Arquitectural',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 8
        },
        {
            nombre: 'Grabación',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Metrología Acústica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Psicoacústica',
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
            nombre: 'Ingeniería de Software',
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
            nombre: 'Instrumentación I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Instrumentación II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Electrónica de Potencia I',
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
            nombre: 'Electrónica Analógica de Comunicaciones',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Comunicaciones por Medio de Fibra Óptica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Redes de Área Ámplia',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Teoría de Codificación y Manejo Información',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Control Analógico Servomecanismos',
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
            nombre: 'Instrumentación de Procesos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Humanidades V: El Humanismo Frente a la Globalización',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 9
        },
        {
            nombre: 'Ingeniería Económica',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Proyecto de Ingeniería o Tópicos Selectos de Ingeniería II',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Acústica Musical',
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
            nombre: 'Reconocimiento y Síntesis de Voz',
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
            nombre: 'Aplicaciones de Redes de Cómputo',
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
            nombre: 'Visión por Computadora',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Electrónica de Potencia II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Instrumentación III',
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
            nombre: 'Televisión y Video',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Diseño de Administración de Redes',
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
            nombre: 'Sincronización y Multiplexaje',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Sistemas de Radiocomunicación',
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
            nombre: 'Sistemas de Adquisición de Datos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        }
    ];

    materias_ids = [];

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
        nombre: 'Ingeniería en Control y Automatización',
        categoria: categorias[0]._id,
        semestres: 9,
        sede: sedes[11]._id,
        materias: []
    });
    await carrera.save();
    materias = [
        {
            nombre: 'Cálculo Diferencial e Integral',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Física Clásica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Álgebra',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Programación',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Humanidades I: Ingeniería, Ciencia y Sociedad',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Química Básica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo Vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Electricidad y Magnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Humanidades II: La Comunicación y la Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Programación Orientada a Objetos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 2
        },
        {
            nombre: 'Química Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Análisis Numérico',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Variable Compleja y Transformadas de Fourier y Z',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Física Moderna',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Teoría de los Circuitos I',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 3
        },
        {
            nombre: 'Prácticas de DAC',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 3
        },
        {
            nombre: 'Economía',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Humanidades III: Desarrollo Humano',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Teoría de los Circuitos II',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 4
        },
        {
            nombre: 'Electrónica I',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 4
        },
        {
            nombre: 'Modelado de Sistemas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Circuitos Lógicos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Calidad Total y Productividad',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Probabilidad y Estadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Máquinas Eléctricas I',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Electrónica Operacional',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Teoría de Control I',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Elementos Primarios de Medición',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Ingeniería Económica',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Preparación y Transporte de Materiales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Máquinas Eléctricas II',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Teoría del Control II',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Electrónica II',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Elementos de Transmisión y Control',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 6
        },
        {
            nombre: 'Metodología de la Investigación',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Operaciones de Separación',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Teoría del Control III',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Instalaciones Eléctricas',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 7
        },
        {
            nombre: 'Tecnología de Mecanismos',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 7
        },
        {
            nombre: 'Interfases y Microcontroladores',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Instrumentos Analíticos de Medición',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Administración',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Control de Procesos I',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Control de Máquinas y Procesos Eléctricos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Mercadotecnia',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Generación y Evaluación de Proyectos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Proyecto Terminal I',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 8
        },
        {
            nombre: 'Control de Procesos II',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Planeación e Ingeniería de Mantenimiento',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Comunicaciones Industriales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Proyecto Terminal II',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 9
        },
        {
            nombre: 'Humanidades IV: Desarrollo Personal y Profesional',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 9
        },
        {
            nombre: 'Administración Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        }
    ];
    materias_ids = [];

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

    //Ingeniería Eléctrica
    carrera = new Carrera({
        nombre: 'Ingeniería Eléctrica',
        categoria: categorias[0]._id,
        semestres: 9,
        sede: sedes[11]._id,
        materias: []
    });

    await carrera.save();

    materias = [
        {
            nombre: 'Cálculo Diferencial e Integral',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Física Clásica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Álgebra',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Programación',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Humanidades I: Ingeniería, Ciencia y Sociedad',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Química Básica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo Vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Electricidad y Magnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Humanidades II: La Comunicación y la Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Programación Orientada a Objetos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 2
        },
        {
            nombre: 'Química Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Métodos Numéricos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Variable Compleja y Transfomradas de Fourier y Z',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Fisca Moderna',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Humanidades III: Desarrollo Humano',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Mecánica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Probabilidad y Estadística',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Análisis  de Circuitos Eléctricos I',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 4
        },
        {
            nombre: 'Conversión de la Energía I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Electrónica I',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 4
        },
        {
            nombre: 'Humanidades IV: Desarrollo Personal y Profesional',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Materiales Electrotécnicos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Teoría de Resistencia de Materiales',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Análisis de Circuitos Eléctricos III',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Conversión de la Energía II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Electrónica II',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Equipo Eléctrico',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Instalaciones Eléctrica en Baja Tension',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 5
        },
        {
            nombre: 'Metodología de la Investigación',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Análisis de Circuitos Eléctricos III',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Conversión de la Energía III',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Electrónica III',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Elementos de Control Eléctrico',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Instalaciones Eléctricas en Alta Tension',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 6
        },
        {
            nombre: 'Teoría General de Sistemas',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Accionamiento y Controles Eléctricos',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Administración y Ahorra de Energía',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Economía',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 7
        },
        {
            nombre: 'Fuentes de Generación',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Generación y Evaluación de Proyectos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Lineas y Redes de Distribución',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Mediciones Eléctricas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Ingeniería Industrial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Sistemas de Protección y Calidad',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Sistema de Tracción Eléctrica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Análisis de Sistemas Eléctricos de Potencia I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Desarrollo Prospectivo de Proyectos o Tópicos Selectos de Energía I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Humanidades V: El Humanismo Frente a la Globalización',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 8
        },
        {
            nombre: 'Ingeniería Económica',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Protección de Sistemas Eléctricos I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Técnicas de las Altas Tensiones I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Diseño I: Máquinas Estáticas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Electrónica de Potencia',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Sistemas de Iluminación',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Administración',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Computación Aplicada a Sistemas Eléctricos',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 9
        },
        {
            nombre: 'Instalaciones Eléctricas Especiales',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa III',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Protección de Sistemas Eléctricos II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Proyecto de Ingeniería o Tópicos Selectos de Ingeniería II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Análisis de Sistemas Eléctricos de Potencia II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Diseño II: Máquinas Rotativas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Puesta de Servicio e Ingeniería de Mantenimiento',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Técnicas de las Altas Tensiones II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
    ];
    materias_ids = [];

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
        nombre: 'Ingeniería en Sistemas Automotrices',
        categoria: categorias[0]._id,
        semestres: 9,
        sede: sedes[11]._id,
        materias: []
    });

    await carrera.save();
    materias = [
        {
            nombre: 'Cálculo Diferencial e Integral',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Física Clásica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Álgebra',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Programación',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Humanidades I: Ingeniería, Ciencia y Sociedad',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Química Básica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo Vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Electricidad y Magnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Humanidades II: La Comunicación y la Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Métodos Numéricos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Química Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Dinámica de Fluidos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Introducción a la Ciencia de los Materiales',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Termodinámica I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Humanidades III: Desarrollo Humano',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Estática',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Análisis de Circuitos de CA y CD',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 3
        },
        {
            nombre: 'Oleoneumática',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Resistencia de Materiales I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Termodinámica II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Dinámica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Electrónica I',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 4
        },
        {
            nombre: 'Probabilidad y Estadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Elementos Mecánicos Automotrices',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Sistemas Automotrices',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Transferencia de Calor',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Electricidad y Electrónica Automotriz',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Modelado y Simulación Asistidos por Computadora',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 5
        },
        {
            nombre: 'Metrología y Normalización',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Diseño Automotriz',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 6
        },
        {
            nombre: 'Dinámica del Vehiculo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Motores de Combustión Interna',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Sistemas de Suspensión, Dirección y Frenos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Tren Motriz',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Procesos de Manufactura Automotriz',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa I: Teoría del Control',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa II: Electrónica Operacional y de Potencia',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa III: Interfaces y Microcontroladores',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Tópicos de Sistemas I - Control de Sistemas Termodinámicos del Automovil I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Obligatoria Ingeniería Ambiental Automotriz',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Obligatoria Humanidades IV Desarrollo Personal y Profesional',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Obligatoria Evaluación Económica de Proyectos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Humanidades V, Humanidades Frente a la Globalización',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 8
        },
        {
            nombre: 'Tópicos Selectos II. Control de Sistemas Dinámicos del Automovil II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Automoviles Eléctricos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Control de Sistemas Termodinámicos del Automovil II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Instrumentación Automotriz',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Sistema de Control de Modelos Automotrices',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Proyecto Integrador',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 9
        }
    ];

    materias_ids = [];

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

    //UNAM
    //Ingeniería Civil
    carrera = new Carrera({
        nombre: 'Ingeniería Civil',
        categoria: categorias[0]._id,
        semestres: 10,
        sede: sedes[41]._id,
        materias: []
    });

    await carrera.save();
    materias = [
        {
            nombre: 'Álgebra',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo y Geometría Analítica',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Representaciones Gráficas',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Programación Básicas',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Redacción y Exposición de Temas de Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Álgebra Lineal',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Cálculo Integral',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Estática',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Geología',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 2
        },
        {
            nombre: 'Geometría Básica',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Cultura y Comunicación',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Cálculo Vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Cinemática y Dinámica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Estructuras Isostáticas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Recursos de la Construcción',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Sistemas Termodinámicos y Electromagnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Probabilidad',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Análisis Numérico',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Resistencia de Materiales I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Sistemas Químicos en Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 4
        },
        {
            nombre: 'Dinámica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Mecánica de Materiales I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Procedimientos Constructivos de Elementos de Estructuras',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 4
        },
        {
            nombre: 'Optativa de Ciencias Sociales y Biológicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 4
        },
        {
            nombre: 'Fundamentos de Mecánica del Medio Continuo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ingeniería de Sistemas I',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 5
        },
        {
            nombre: 'Hidráulica Básica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Ingeniería Ambiental I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 5
        },
        {
            nombre: 'Mecánica de Materiales',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Programación y Presupuestación',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 5
        },
        {
            nombre: 'Introducción a la Economía',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Ingeniería de Sistemas II',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 6
        },
        {
            nombre: 'Hidráulica de Máquinas y Transitorios',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Ingeniería Ambiental II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Estadística Aplicada a la Ingeniería Civil',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 6
        },
        {
            nombre: 'Comportamiento de Suelos',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Ética Profesional',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Planeación',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Hidráulica de Canales',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Análisis Estructural',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 7
        },
        {
            nombre: 'Mecánica de Suelos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Movimiento de Tierras',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 7
        },
        {
            nombre: 'Abastecimiento de Agua Potable',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 7
        },
        {
            nombre: 'Alcantarillado Sanitario y Pluvial',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Hidrología',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Dimensionamiento de Elementos Estructurales',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 8
        },
        {
            nombre: 'Cimentaciones',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 8
        },
        {
            nombre: 'Edificación',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 8
        },
        {
            nombre: 'Ingeniería de Tránsito',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Optativas de Ciencias Sociales y Humanidades',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Evaluación de Proyectos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Obras Hidráulicas',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 9
        },
        {
            nombre: 'Diseño Estructural',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 9
        },
        {
            nombre: 'Tratamientos de Aguas Residuales',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 9
        },
        {
            nombre: 'Recursos y Necesidades de México',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 9
        },
        {
            nombre: 'Ingeniería de Transporte I',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 9
        },
        {
            nombre: 'Administración en Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 10
        },
        {
            nombre: 'Ingeniería de Transporte II',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 10
        },
        {
            nombre: 'Integracion de Proyectos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 10
        }
    ];

    materias_ids = [];

    await materias.map((item, index) => {
        const materia = new Materia(item);
        materias_ids.push(materia._id);
        materia.save()
            .then(item => {
                //console.log(item);
            });
    });

    //Ingeniería Geomática
    carrera.materias = materias_ids;
    await carrera.save();
    carrera = new Carrera({
        nombre: 'Ingeniería Geomática',
        categoria: categorias[0]._id,
        semestres: 10,
        sede: sedes[1]._id,
        materias: []
    });

    await carrera.save();

    materias = [
        {
            nombre: 'Álgebra',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo y Geometría Analítica',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Representaciones Gráficas',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Prácticas de Topografía I',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 1
        },
        {
            nombre: 'Topografía I',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 1
        },
        {
            nombre: 'Redacción y Exposición de Temas de Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Álgebra Lineal',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Cálculo Integral',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Estática',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Geología',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Programación Básica',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 2
        },
        {
            nombre: 'Topografía II',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 2
        },
        {
            nombre: 'Prácticas de Topografía II',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 2
        },
        {
            nombre: 'Cultura y Comunicación',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Cálculo Vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Cinemática y Dinámica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Probabilidad',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Fotogrametría',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 3
        },
        {
            nombre: 'Optativa de Ciencias Sociales y Humanidades',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 3
        },
        {
            nombre: 'Análisis Numérico',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Electromagnetismo y Óptica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Estadística Aplicada a Ingeniería Geomática',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Geodesia I',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 4
        },
        {
            nombre: 'Procesos Fotogramétricos',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 4
        },
        {
            nombre: 'Modelación Matemática',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Cartografía',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Geología y Geomorfología',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Geodesia II',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Introducción a Bases de Datos Espaciales',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 5
        },
        {
            nombre: 'Introducción a la Economía',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Ética Profesional',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Teoría de los Errores',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Sistemas de Posicionamientos Global',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Geodesia III',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Sistemas de Información Geografica I',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Hidráulica e Hidrología',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Cálculo de Ajustes',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 7
        },
        {
            nombre: 'Topografía de Yacimientos Minerales',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 7
        },
        {
            nombre: 'Percepción Remota I',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 7
        },
        {
            nombre: 'Sistemas de Información Geográfica II',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa de Ciencias Sociales y Humanidades',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Legislación Aplicada a Ingeniería Geomática',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Proyecto Geométrico de Obras de Infraestructura Lineal',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Fundamentos de Catastro',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Percepción Remota II',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Gestión Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Recursos y Necesidades de México',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 8
        },
        {
            nombre: 'Proyecto Geomatico',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 9
        },
        {
            nombre: 'Prácticas Profesionales',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 9
        },
        {
            nombre: 'Administración de Proyectos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
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

    //Ingeniería Ambiental
    carrera = new Carrera({
        nombre: 'Ingeniería Ambiental',
        categoria: categorias[0]._id,
        semestres: 10,
        sede: sedes[41]._id,
        materias: []
    });

    materias = [
        {
            nombre: 'Álgebra',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo y Geometría Analítica',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Representaciones Gráficas',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Programación Básica',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Redacción y Exposición de Temas de Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Álgebra Lineal',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Cálculo Integral',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Probabilidad',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Introducción al Estudio del Medio Ambiente',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Química Inorgánica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Cultura y Comunicación',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Estadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Física Experimiental',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Cálculo Vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Fisicoquímica para Ingeniería Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Optativa de Ciencias Sociales y Humanidades',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 3
        },
        {
            nombre: 'Análisis Numéricos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Recursos y Necesidades de México',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Termodinámica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Mecánica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Química Orgánica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 4
        },
        {
            nombre: 'Biología',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 4
        },
        {
            nombre: 'Geología',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Transferencia de Masa y Energía',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Mecánica de Fluidos para Ingeniería Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Ecología e Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Ingeniería de Procesos Ecológicos',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Introducción a la Economía',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Hidrología Superficial',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Transporte y Dispersión de Contaminantes Atmosféricos',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Conductos a Presión y a Superficie Libre',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Conocimiento Territorial',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Evaluación de la Calidad del Agua',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Economía Ambiental y Ecológica',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Hidrogeología',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 7
        },
        {
            nombre: 'Evaluación de la Calidad del Aire',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 7
        },
        {
            nombre: 'Operaciones y Procesos Unitarios',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Gestión Integral de Residuos Sólidos Urbanos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa de Otras Asignaturas Conveniente',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Planeación',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Materiales y Residuos Peligrosos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Control de Emisiones a la Atmósfera',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Proyectos de Plantas de Tratamiento de Agua para Consumo Humano',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Gestión Integral de Residuos de Manejo Especial',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Contaminación por Ruido y Control',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Evaluación Ambiental Estrategica',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Proyecto Geomatico',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 9
        },
        {
            nombre: 'Control de la Contaminacion de Suelos y Acuíferos',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 9
        },
        {
            nombre: 'Obligatoria del Campo de Profundizacion',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 9
        },
        {
            nombre: 'Proyectos de Plantas de Tratamiento de Agua Residual',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 9
        },
        {
            nombre: 'Sistemas de Recuperacion de Recursos y Energía',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 9
        },
        {
            nombre: 'Ética Profesional',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 9
        },
        {
            nombre: 'Evaluación de Impacto Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 9
        },
    ];

    materias_ids = [];

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

    //Ingeniería Geofísica
    carrera = new Carrera({
        nombre: 'Ingeniería Geofísica',
        categoria: categorias[0]._id,
        semestres: 10,
        sede: sedes[41]._id,
        materias: []
    });

    await carrera.save();

    materias = [
        {
            nombre: 'Álgebra',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo Diferencial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Geometría Analítica',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Computación para Ingenieros',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 1
        },
        {
            nombre: 'Cultura y Comunicación',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Álgebra Lineal',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Cálculo Integral',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Estática',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Fundamentos de la Geología',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 2
        },
        {
            nombre: 'Química',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Termodinámica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Cálculo Vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Mineralogía',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Dibujo',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 3
        },
        {
            nombre: 'Electricidad y Magnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Cinemática y Dinámica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Introducción a la Geofísica',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 4
        },
        {
            nombre: 'Petrología',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 4
        },
        {
            nombre: 'Geomática para Ciencias de la Tierra',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Variable Compleja Aplicada a la Geofísica',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Análisis Numérico',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Probabilidad y Estadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Sedimentología',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Geología Estructural',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Estratigrafía',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Análisis Espectra de Señales',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Mecánica del Medio Continuo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Inferencia Estadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 6
        },
        {
            nombre: 'Teoría del Potencial Aplicada a la Geofísica',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Geología de Campo',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Literatura Hispanoamericana Contemporanea',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Introducción al Diseño de Filtros Digitales',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 7
        },
        {
            nombre: 'Física de las Ondas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Fundamentos de Teoría Electromagnética',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Prospección Gravimétrica y Magnetométrica',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 7
        },
        {
            nombre: 'Ética Profesional',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa de Ciencias Sociales y Humanidades',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Introducción al Tratamiento de Señales',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Prospección Sismica',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Prospección Eléctrica',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Asignatura del Módulo Seleccionado',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Introducción a la Economía',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 8
        },
        {
            nombre: 'Petrofísica y Registros Geofísicos de Pozo',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 9
        },
        {
            nombre: 'Inversión de Datos Geofísicos',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 9
        },
        {
            nombre: 'Prospección Electromagnética',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Asignatura del Módulo Seleccionado',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 9
        },
        {
            nombre: 'Evaluación de Proyectos de Inversión',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 9
        },
        {
            nombre: 'Proyecto Terminal del Módulo Seleccionado',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 10
        },
        {
            nombre: 'Procesamiento de Datos Geofísicos',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 10
        },
        {
            nombre: 'Temas Selectos del Módulo Seleccionado',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 10
        },
        {
            nombre: 'Asignatura del Módulo Seleccionado',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 10
        },
        {
            nombre: 'Recursos y Necesidades de México',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 10
        }
    ];

    materias_ids = [];

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

    //Ingeniería Geológica
    carrera = new Carrera({
        nombre: 'Ingeniería Geológica',
        categoria: categorias[0]._id,
        semestres: 10,
        sede: sedes[41]._id,
        materias: []
    });

    await carrera.save();

    materias = [
        {
            nombre: 'Álgebra',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo y Geometría Analítica',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Química de Ciencias de la Tierra',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Redacción y Exposición de Temas de Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Dibujo',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 1
        },
        {
            nombre: 'Álgebra Lineal',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Cálculo Integral',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Mecánica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Fundamentos de la Programación',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 2
        },
        {
            nombre: 'Geometría Descriptiva Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Cálculo Vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Física',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Geología Física',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 3
        },
        {
            nombre: 'Paleontología General',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 3
        },
        {
            nombre: 'Cultura y Comunicación',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Análisis Numérico',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Probabilidad',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Sedimentología',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 4
        },
        {
            nombre: 'Técnicas Geológicas de Campo',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 4
        },
        {
            nombre: 'Mineralogía',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 4
        },
        {
            nombre: 'Introducción a la Economía',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Geoquímica',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Estadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Estratigrafía',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Mineralogia Óptica',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Literatura Hispanoamericana l',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 5
        },
        {
            nombre: 'Geología Estructural',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Prospección Geofísica y Registros en Pozos',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Geomorfología',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Geología de Campo y Cartografía',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Petrología Metamó2rfica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Petrología Ígnea',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Introducción al Análisis Económico Empresarial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 6
        },
        {
            nombre: 'Tectónica',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 7
        },
        {
            nombre: 'Metalogenia',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 7
        },
        {
            nombre: 'Sistemas de Información Geográfica',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 7
        },
        {
            nombre: 'Hidrogeología',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 7
        },
        {
            nombre: 'Petrología Sedimentaria',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 7
        },
        {
            nombre: 'Geología del Subsuelo',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Mecánica de Rocas',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Geología Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Geología Aplicada a la Minería',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Geología del Petroleo',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Geología Aplicada a la Ingeniería Civil',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 9
        },
        {
            nombre: 'Geoestadística',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 9
        },
        {
            nombre: 'Geología Histórica',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 9
        },
        {
            nombre: 'Proyectos de Ingeniería Geológica',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 9
        },
        {
            nombre: 'Ética Profesional',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 9
        },
        {
            nombre: 'Geología de México',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 10
        },
        {
            nombre: 'Recursos y Necesidades de México',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 10
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        }, {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        }
    ];

    materias_ids = [];

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

    //Ingeniería Petrolera
    carrera = new Carrera({
        nombre: 'Ingeniería Petrolera',
        categoria: categorias[0]._id,
        semestres: 10,
        sede: sedes[41]._id,
        materias: []
    });

    await carrera.save();
    materias = [
        {
            nombre: 'Álgebra',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo y Geometría Analítica',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Química de Ciencias de la Tierra',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Cultura y Comunicación',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Introducción a la Ingeniería Petrolera',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 1
        },
        {
            nombre: 'Dibujo',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 1
        },
        {
            nombre: 'Álgebra Lineal',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Cálculo Integral',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Mecánica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Fundamentos de la Programación',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 2
        },
        {
            nombre: 'Geología General',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 2
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Cálculo Vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Fundamentos de Termodinámica y Eletromagnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Geología de Yacimientos de Fluidos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Equipos y Herramientas de Perforación de Pozos',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 3
        },
        {
            nombre: 'Redacción y Exposición de Temas de Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Análisis Numérico',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Probabilidad',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Propiedades de los Fluidos Petroleros',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 4
        },
        {
            nombre: 'Mecánica de Fluidos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Geología y Geoquímica del Petroleo',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 4
        },
        {
            nombre: 'Fluidos de Perforacion',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Literatura Hispanoamericana Cotemporanea',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 5
        },
        {
            nombre: 'Estadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Principios de Mecánica de Yacimientos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Bombeo y Compresion de Hidrocarburos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Programación Avanzada',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 5
        },
        {
            nombre: 'Registros Geofísicos en Pozos',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Productividad de Pozos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Ingeniería de Perforación de Pozos',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Comportamiento de Yacimientos',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Flujo Multifásico en Tuberias',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Caracterización Estática de Yacimientos',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Caracterización Dinámica de Yacimientos',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 7
        },
        {
            nombre: 'Sistemas Artificiales de Producción',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 7
        },
        {
            nombre: 'Recuperación Secundaria y Mejorada',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 7
        },
        {
            nombre: 'Perforación no Convencional',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa de Ciencias Sociales y Humanidades',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Ingeniería de Yacimientos de Gas',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Introducción a la Economía',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 8
        },
        {
            nombre: 'Simulación Matematica de Yacimientos',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Terminación y Mantenimiento',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa de Ingeniería Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Administración Integral de Yacimientos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Economía de los Hidrocarburos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Conducción y Manejo de la Producción de Hidrocarburos',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 9
        },
        {
            nombre: 'Ética Profesional',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 9
        },
        {
            nombre: 'Administración de la Seguridad Industrial y Protección Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa de Ingeniería Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 9
        },
        {
            nombre: 'Planeación y Evaluación de Proyectos Petroleras',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 10
        },
        {
            nombre: 'Temas Selectos de Ingeniería Petrolera',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 10
        },
        {
            nombre: 'Recursos y Necesidades de México',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 10
        },
        {
            nombre: 'Proyectos Integrales Petroleras',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 10
        },
        {
            nombre: 'Legislación de la Industria Petrolera',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 10
        },
        {
            nombre: 'Optativa de Ingeniería Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 10
        }
    ];

    materias_ids = [];

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

    //Ingeniería Industrial
    carrera = new Carrera({
        nombre: 'Ingeniería Industrial',
        categoria: categorias[0]._id,
        semestres: 9,
        sede: sedes[41]._id,
        materias: []
    });

    await carrera.save();

    materias = [
        {
            nombre: 'Álgebra',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo Diferencial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Geometría Analítica',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Computación para Ingenieros',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 1
        },
        {
            nombre: 'Ingeniería Industrial y Productividad',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 1
        },
        {
            nombre: 'Álgebra Lineal',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Cálculo Integral',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Estática',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Química General',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Dibujo Mecánico e Industrial',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 2
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Cálculo Vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Cinemática y Dinámica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Termodinámica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Cultura y Comunicación',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Análisis Numérico',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Probabilidad y Estadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Electricidad y Magnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Termofluidos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Contabilidad Financiera y Costos Introducción a la Economía',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Sistemas Electromecánicos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Estadística Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Mecánica de Sólidos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Laboratorio de Máquinas Termicas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Ingeniería Económica',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Estudio del Trabajo',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Electrónica Básica',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Investigación de Operaciones I',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Tecnología de Materiales',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 6
        },
        {
            nombre: 'Procesos Industriales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Sistemas de Planeación',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Literatura Hispanoamericana Contemporanea',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Instalaciones Electromecánicas',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 7
        },
        {
            nombre: 'Investigación de Operaciones II',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Procesos de Manufactura I',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 7
        },
        {
            nombre: 'Sistemas de Mejoramiento Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 7
        },
        {
            nombre: 'Diseño de Sistemas Productivos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Relaciones Laborales y Organizacionales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Instrumentación y Control',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Procesos de Manufactura II',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 8
        },
        {
            nombre: 'Planeación y Control de la Producción',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Ética Profesional',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 8
        },
        {
            nombre: 'Seminario de Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Recursos y Necesidades de México',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 9
        },
        {
            nombre: 'Evaluación de Proyectos de Inversión',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Proyecto de Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 9
        }
    ];

    materias_ids = [];

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

    //Ingeniería en Telecomunicaciones
    carrera = new Carrera({
        nombre: 'Ingeniería en Telecomunicaciones',
        categoria: categorias[0]._id,
        semestres: 9,
        sede: sedes[41]._id,
        materias: []
    });

    await carrera.save();

    materias = [
        {
            nombre: 'Álgebra',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo Diferencial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Geometría Analítica',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Química y Estructura de Materiales',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Cultura y Comunicación',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Álgebra Lineal',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Cálculo Integral',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Estática',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Computacion para Ingenieros',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 2
        },
        {
            nombre: 'Introducción a la Economía',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Cálculo Vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Cinemática y Dinámica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Principios de Termodinámica y Electromagnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Programación Avanzada y Métodos Numéricos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 3
        },
        {
            nombre: 'Electricidad y Magnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Probabilidad y Estadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Análisis de Sistemas y Señales',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 4
        },
        {
            nombre: 'Diseño Digital',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 4
        },
        {
            nombre: 'Literatura Hispanoamericana Contemporanea',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Optativa de Ciencias Sociales y Humanidades',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 4
        },
        {
            nombre: 'Campos y Ondas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Fundamentos de Sistemas de Comunicaciones',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 5
        },
        {
            nombre: 'Dispositivos de RF',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 5
        },
        {
            nombre: 'Análisis de Señales Aleatorias',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 5
        },
        {
            nombre: 'Elementos de Control',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Circuitos Eléctricos',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Medios de Transmisión',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 6
        },
        {
            nombre: 'Comunicaciones Digitales',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 6
        },
        {
            nombre: 'Circuitos de RF',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Procesamiento Digital de Señales para Comunicaciones',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 6
        },
        {
            nombre: 'Teoría de la Información y la Codificación',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 6
        },
        {
            nombre: 'Ética Profesional',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Antenas',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Dispositivos de Microondas I',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Receptores',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Tecnologías para Procesamiento Digital de Señales',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Redes de Datos I',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 7
        },
        {
            nombre: 'Recursos y Necesidades de Mexico',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Sistemas de Comunicaciones Ópticas',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 8
        },
        {
            nombre: 'Dispositivos de Microondas II',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 8
        },
        {
            nombre: 'Transmisores',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 8
        },
        {
            nombre: 'Sistemas de Radiocomunicaciones I',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 8
        },
        {
            nombre: 'Telefonia Digital',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 8
        },
        {
            nombre: 'Asignatura del Modulo Seleccionado',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 8
        },
        {
            nombre: 'Asignatura del Modulo Seleccionado',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 9
        },
        {
            nombre: 'Asignatura del Modulo Seleccionado',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 9
        },
        {
            nombre: 'Administración y Regulación de las Telecomunicaciones',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Sistemas de Radiocomunicaciones II',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 9
        },
        {
            nombre: 'Redes Inalambricas y Moviles',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 9
        },
        {
            nombre: 'Desarollo Empresarial',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        }
    ];

    materias_ids = [];

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

    //Ingeniería en Minas y Metalurgia
    carrera = new Carrera({
        nombre: 'Ingeniería en Minas y Metalurgia',
        categoria: categorias[0]._id,
        semestres: 9,
        sede: sedes[41]._id,
        materias: []
    });

    await carrera.save();

    materias = [
        {
            nombre: 'Álgebra',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo Diferencial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Geometría Analítica',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Computacion para Ingenieros',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 1
        },
        {
            nombre: 'Geología General',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 1
        },
        {
            nombre: 'Álgebra Lineal',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Cálculo Integral',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Química',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Dibujo',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 2
        },
        {
            nombre: 'Mineralogía',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Cultura y Comunicación',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Ecuaciones Diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Cálculo Vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Geometría Descriptiva Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Principios de Termodinámica y Electromagnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Petrología',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 3
        },
        {
            nombre: 'Fisicoquímica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 4
        },
        {
            nombre: 'Probabilidad y Estadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Estática',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Geología Estructural',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 4
        },
        {
            nombre: 'Análisis Numérico',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Legislación Aplicada a la Mineria',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Cinemática y Dinámica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Análisis Químico',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 5
        },
        {
            nombre: 'Topografía para Mineros',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Yacimientos Minerales',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Mecánica de Fluidos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Mecánica de Rocas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Preparación Mecánica de Minerales',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Fundamentos para la Explotación de Minas',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Prospeccion Minera',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Literatura Hispanoamericana Contemporanea',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Introducción a la Economía',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 7
        },
        {
            nombre: 'Dispositivos de Microondas I',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Receptores',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Tecnologías para Procesamiento Digital de Señales',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Redes de Datos I',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 7
        },
        {
            nombre: 'Recursos y Necesidades de Mexico',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Sistemas de Comunicaciones Ópticas',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 8
        },
        {
            nombre: 'Dispositivos de Microondas II',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 8
        },
        {
            nombre: 'Transmisores',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 8
        },
        {
            nombre: 'Sistemas de Radiocomunicaciones I',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 8
        },
        {
            nombre: 'Telefonia Digital',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 8
        },
        {
            nombre: 'Asignatura del Modulo Seleccionado',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Asignatura del Modulo Seleccionado',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 9
        },
        {
            nombre: 'Asignatura del Modulo Seleccionado',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 9
        },
        {
            nombre: 'Administración y Regulación de las Telecomunicaciones',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Sistemas de Radiocomunicaciones II',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 9
        },
        {
            nombre: 'Redes Inalambricas y Moviles',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 9
        },
        {
            nombre: 'Desarollo Empresarial',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        }
    ];

    materias_ids = [];

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

    // Ingenieria textil

    carrera = new Carrera({
        nombre: 'Ingeniería Textil',
        categoria: categorias[0]._id,
        semestres: 8,
        sede: sedes[14]._id,
        materias: []
    });

    await carrera.save();

    materias = [
        {
            nombre: 'Humanidades, ciencias y sociedad',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Fibras naturales y artificiales',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 1
        },
        {
            nombre: 'Dibujo a mano alzada',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de programación',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Física clásica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Contabilidad y costos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 1
        },
        {
            nombre: 'Inglés lectura y comprensión',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Método de hilados',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 1
        },
        {
            nombre: 'Ecuaciones diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Fibras sintéticas y especiales',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 2
        },
        {
            nombre: 'Método de tejidos',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 2
        },
        {
            nombre: 'Electricidad y magnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Quimica textil',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Cálculo vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Inglés Técnico',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Método de acabados',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 2
        },
        {
            nombre: 'Higiene y seguridad industrial',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 3
        },
        {
            nombre: 'Gestión ambiental y tecnologías limpias',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Patronaje',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 3
        },
        {
            nombre: 'Electromecánica y electrónica',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 3
        },
        {
            nombre: 'Ingeniería económica',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Métodos de confección',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 3
        },
        {
            nombre: 'Contextos internacionales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Química del agua y tensoactivos',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Cinemática de las máquinas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Análisis de hilos y telas',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 4
        },
        {
            nombre: 'Metrología, normalización y ensayos textiles',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 4
        },
        {
            nombre: 'Termodinámica y principios de transferencia de calor',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Comunicación y sistemas de información',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 4
        },
        {
            nombre: 'Diseño por computadora',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 4
        },
        {
            nombre: 'Probabilidad y estadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Programación orientada a objetos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 5
        },
        {
            nombre: 'Geotextiles',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 5
        },
        {
            nombre: 'Liderazgo y productividad',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 5
        },
        {
            nombre: 'Tecnología del reciclado',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 5
        },
        {
            nombre: 'Química de los colorantes',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 5
        },
        {
            nombre: 'Diseño Textil',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 5
        },
        {
            nombre: 'Estudio del trabajo',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Pretratamiento de hilos y géneros textiles',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 6
        },
        {
            nombre: 'Relaciones laborales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Nanotecnología',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 6
        },
        {
            nombre: 'Geología',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Legislación aduanera',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Reingeniería comercial',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Formulación de proyectos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Servicio social',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 8
        },
        {
            nombre: 'Electivas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Control de la producción',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 9
        },
        {
            nombre: 'Metodología de la investigación',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Gestión de proyectos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Gestión y sistemas de calidad',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Procesos textiles',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 9
        },
        {
            nombre: 'Evaluación de proyectos',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 9
        },
        {
            nombre: 'Prácticas profesionales',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 9
        }
    ];

    materias_ids = [];

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
    //CICS Milpa Alta
    // Licenciado en Nutrucion

    //QUEDO PENDIENTO XD

    //ESEO
    //Licenciatura en enfermeria
    carrera = new Carrera({
        nombre: 'Licenciatura en enfermería',
        categoria: categorias[0]._id,
        semestres: 8,
        sede: sedes[20]._id,
        materias: []
    });

    await carrera.save();

    materias = [
        {
            nombre: 'Anatomía',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 1
        },
        {
            nombre: 'Fisiología',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 1
        },
        {
            nombre: 'Bioquímica general',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Histología básica',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 1
        },
        {
            nombre: 'Microbiología y parasitología general',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 1
        },
        {
            nombre: 'Historia y filosofía del ciudado enfermero',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Salud pública',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 2
        },
        {
            nombre: 'Psicología del desarrollo',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Comunicación Oral y Escrita',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Etimologías grecolatinas',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Técnología de la informática y comunicación',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 2
        },
        {
            nombre: 'Sociología y antropología del cuidado',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Farmacología general',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Farmacología clínica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Nutrición en el ciclo de la vida',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 3
        },
        {
            nombre: 'Inmunología básica',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 3
        },
        {
            nombre: 'Psicología del cuidado',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Ética profesional',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Desarollo humano social e institucional',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Bioética y tanatología',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 3
        },
        {
            nombre: 'Patología del adulto',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 4
        },
        {
            nombre: 'Patología del adulto y adulto mayor',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 4
        },
        {
            nombre: 'Gineco obstetrica y perinatología',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 4
        },
        {
            nombre: 'Patología pediátrica',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 4
        },
        {
            nombre: 'Epidemiología y bioestadística',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 4
        },
        {
            nombre: 'Fundamentos de enfermería',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 4
        },
        {
            nombre: 'Teorías y método de enfermería',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 4
        },
        {
            nombre: 'Enfermería comunitaria',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 4
        },
        {
            nombre: 'Ingles curricular nivel B1 del MCERL',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Dietoterapia',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 5
        },
        {
            nombre: 'Enfermería del adulto',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 5
        },
        {
            nombre: 'Enfemería del adulto y adulto mayor',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 5
        },
        {
            nombre: 'Enfermería materno infantil',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 5
        },
        {
            nombre: 'Enfermería pediátrica',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 5
        },
        {
            nombre: 'Práctica comunitaria',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 5
        },
        {
            nombre: 'Enfermería en la salud mental y psiquiatría',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 5
        },
        {
            nombre: 'Administración y gestión de los servicios de enfermería',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Docencia en enfermería',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 5
        },
        {
            nombre: 'Protocolos de investigación en enfermería',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 6
        },
        {
            nombre: 'Práctica de fundamentos',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 6
        },
        {
            nombre: 'Práctica hospitalaria del adulto y adulto mayor',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 6
        },
        {
            nombre: 'Práctica hospitalaria materno infantil',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 6
        },
        {
            nombre: 'Práctica hospitalaria de pediatría',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 6
        },
        {
            nombre: 'Legislación en enfermería',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 6
        },
        {
            nombre: 'Investigación en enfermería',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 7
        },
        {
            nombre: 'Práctica comunitaria del adulto y adulto mayor',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 7
        },
        {
            nombre: 'Práctica comunitaria materno infantil',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 7
        },
        {
            nombre: 'Práctica comunitaria de pediatría',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 7
        },
        {
            nombre: 'Gestión empresarial',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Práctica de administración y gestión',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Inglés curricular nivel B2 del MCERL',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Diseño y gestión de programas de salud comunitaria',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Diseño y gestión de protocolos de enfermería hospitalaria',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Servicio Social',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 8
        },
        {
            nombre: 'Electiva',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Electiva',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        }
    ];

    materias_ids = [];

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

    // Ingenieria en enfermería y obstetrica
    //Plan de estudios conseguid no sirve

    //ESCA Santo Tomás
    //Contador público

    carrera = new Carrera({
        nombre: 'Contador Público',
        categoria: categorias[0]._id,
        semestres: 10,
        sede: sedes[23]._id,
        materias: []
    });

    await carrera.save();

    materias = [
        {
            nombre: 'Tecnologías de Información y Comunicación',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 1
        },
        {
            nombre: 'Comunicación Oral y Escrita',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 1
        },
        {
            nombre: 'Solución de Problemas y Creatividad',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Desarollo Sustentable',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Administración',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Economía',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Comportamiento Organizacional',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Fundamentos de Derecho',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Fundamentos de Contabilidad',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Fundamentos de Mercadotecnia',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Matemáticas para Negocios',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Seminario de Investigación',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Derecho mercantil y laboral',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Derecho tributario y seguridad social',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Fundamentos de finanzas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Tributación de personas morales',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Ciclo financiero a corto plazo',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Costos históricos',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Herramientas administrativas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Matemáticas financieras',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Procesamiento y análisis de datos electrónicos',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 4
        },
        {
            nombre: 'Estadística para negocios',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Planeación financieria',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Ciclo financiero a largo plazo',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Costos predetermiandos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Macroeconomía',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Tributación de personas físicas',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 5
        },
        {
            nombre: 'Fundamentos de auditoría',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Finanzas corporativas',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 6
        },
        {
            nombre: 'Comercio internacional',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa A',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa B',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Auditoría interna y gobierno corporativo',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Estudio de capital contable',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 7
        },
        {
            nombre: 'Costos para la toma de decisiones',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 7
        },
        {
            nombre: 'Estructura de tributación de personas morales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Contabilidad corporativa',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 8
        },
        {
            nombre: 'Auditoría de estados financieros',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Dictamen e informes de estados financieros',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Análisis e interpretación de la información financieria',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa C',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Seminario de investigación supervisada',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Dirección estratégica',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Plan de negocios integral',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Simulador de negocios',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Seminario de impuestos y casos especiales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 10
        },
        {
            nombre: 'Administración de riesgos e instrumentos derivados',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 10
        },
        {
            nombre: 'Electivas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Servicio Social',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 10
        },
        {
            nombre: 'Métodos cuantitativos para la toma de decisiones',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Contabilidad turística y de autotransporte',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 6
        },
        {
            nombre: 'Motivación, conflicto y estrés en el trabajo, las relaciones humanas en la empresa',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Psicología organizacional',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Auditoría de calidad',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Régimen fiscal del sector financiero',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Impuestos al comercio exterior',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Contribuciones relacionadas a renumeraciones al trabajo profesional',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Contabilidad de constructuras',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Contabilidad de hospitales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Comunicación organizacional',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Personalidad, ética y liderazgo',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Administración del capital humano',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Auditoría gubernamental',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Auditoría ambiental',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Auditorías fiscales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Contribuciones indirectas y estatales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Precios de transferencias',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Procedimientos administrativos y defensa fiscal',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Contabilidad de instituciones financieras',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Contabilidad de instituciones de seguros',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Contabilidad gubernamental',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Seminario de tesis',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 8
        },
        {
            nombre: 'Comportamiento directivo',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 8
        },
        {
            nombre: 'Taller de desarollo empresarial',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Normas para atestiguar y servicios relacionados',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Finanzas internacionales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 8
        },
        {
            nombre: 'Planificación fiscal',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Administración pública',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Sistemas de información financiera',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Finanzas públicas',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 8
        }

    ];

    materias_ids = [];

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

    // Licenciatura en administraicón y desarollo empresarial

    carrera = new Carrera({
        nombre: 'Licenciatura en administración y desarrollo empresarial',
        categoria: categorias[0]._id,
        semestres: 9,
        sede: sedes[23]._id,
        materias: []
    });

    await carrera.save();

    materias = [
        {
            nombre: 'Comunicación oral y escrita',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Tecnologías de Información y Comunicación',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 1
        },
        {
            nombre: 'Desarrollo Sustentable',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Solución de problemas y Creatividad',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Economía',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Administración',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de comportamiento organizacional',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Fundamentos de Contabilidad',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Fundamentos de Mercadotecnia',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Seminario de Investigación',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Fundamentos de Derecho',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Matemáticas para Negocios',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Derecho mercantil',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'The Mexican economy in the global context',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Sistemas de información administrativos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Responsabilidad Social y Ética en los negocios',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Matemáticas financieras',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Optativas A',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 3
        },
        {
            nombre: 'Costos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Plan de vida y carrera del emprendedor',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Administración del capital humano',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Técnicas de organización',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Administración de ventas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Derecho laboral',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Estadistica aplicada',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Optativa B',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Emprendimiento',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Administración financiera de empresas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Strategic management',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Main International economies',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Normas de Estadarización',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Administración de la producción',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Investigación de operaciones',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa C',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Empresas familiares',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Administración de proyectos de inversión',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Fiscal',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Analysis of management megatrends',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Administración de las remuneraciones',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Strategic marketing manageement',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Decision making and negotiation',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Electiva',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Business English',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 9
        },
        {
            nombre: 'Seminario de Investigación aplicada',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Administración de PyMES',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Auditoría administrativa',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Plan de negocios',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Cultura financiera en las organizaciones',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Administración sustentable',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Estudio de bloques económicos',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Administración Pública y Seguridad de la información',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Análisis de mercados de capitales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Planeaicón, innovación e iniciativas sustentables',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Exportación e importación',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Finanzas Públicas',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Administración del capital del trabajo en las PyMES',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Dirección estratégica',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Mercadotecnia Internacional en los negocios',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Adquisiciones gubernamentales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        }
    ];

    materias_ids = [];

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

    // Licenciatura en negocios internacionales

    carrera = new Carrera({
        nombre: 'Licenciatura en negocios internacionales',
        categoria: categorias[0]._id,
        semestres: 10,
        sede: sedes[23]._id,
        materias: []
    });

    await carrera.save();

    materias = [
        {
            nombre: 'Comunicación oral y escrita',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Tecnologías de Información y Comunicación',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 1
        },
        {
            nombre: 'Desarollo Sustentable',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Solución de problemas y Creatividad',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Economía',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Administración',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de comportamiento organizacional',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Fundamentos de Contabilidad',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Fundamentos de Mercadotecnia',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Seminario de Investigación',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Fundamentos de Derecho',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Matemáticas para Negocios',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Fundamentos de Negociaciones Internacionales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Marco Legal de Comercio Exterior',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Estrcutura Económica Internacional',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Análisis de Mercados Internacionales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Crédito y Cobranza Internacional',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Transportación y Canales de distribución Internacionales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Operaciones de Comercio Exterior',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Derecho Fiscal',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Estadística Descriptiva e Inferencial',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Calidad y Teoría General de Sistemas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Optativa A',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Optativa B',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Estudios Regionales de Europa',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 5
        },
        {
            nombre: 'Estudios Regionales de América Latina y el Carible',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 5
        },
        {
            nombre: 'Estudios Regionales del Pacífico Asiático Medio Oriente y África',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 5
        },
        {
            nombre: 'Estudios Regionales de Norte América',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Geografía e Historia Mundial',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Administración y Operación Aduanera Internacional',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 6
        },
        {
            nombre: 'Finanzas Corporativas',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 6
        },
        {
            nombre: 'Mercadotecnia y Promoción Internacional',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa C',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Escenarios Internacionales',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 7
        },
        {
            nombre: 'Organismos Internacionales',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Derecho y Tratados Internacionales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Inversión Extranejera',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Estrategia Financiera Internacional',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Estrategias de Negociacion Internacional',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Administración de las cadenas de suministro',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Desarrollo de habilidades directivas',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 8
        },
        {
            nombre: 'Servicio Social',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 9
        },
        {
            nombre: 'Electiva',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Dirección de Operaciones Logísticas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Estudios de las Relaciones Internacionales',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 9
        },
        {
            nombre: 'Análisis de la Política Mundial',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 9
        },
        {
            nombre: 'Taller de licitaciones Internacionales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Contratos Internacionales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Administración estratégica de Comercio Exterior',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 10
        },
        {
            nombre: 'Plan de Negocios Internacionales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 10
        },
        {
            nombre: 'Dirección Estratégica Internacional',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 10
        },
        {
            nombre: 'Seminario de Investigación Supervisada',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 10
        },
        {
            nombre: 'Clasificación Arancelaria',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Tics para Negocios',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Métodos Cuantitativos para Negocios',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Compra Venta Internacionales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Administración de Riesgo',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Análisis de Costo de Comercio Exterior y Estructura de Precios de Exportación',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Propiedad Intelectual',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Franquicias y Licencias',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Taller de Proyecto de Investigación',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Taller de Emprendedores y Proyecto de Negocios',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Relaciones Diplomáticas Consulares',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        }
    ];

    materias_ids = [];

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

    // Licenciatura en relaciones comerciales

    carrera = new Carrera({
        nombre: 'Licenciatura en relaciones comerciales',
        categoria: categorias[0]._id,
        semestres: 10,
        sede: sedes[23]._id,
        materias: []
    });

    await carrera.save();

    materias = [
        {
            nombre: 'Comunicación oral y escrita',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Tecnologías de Información y Comunicación',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 1
        },
        {
            nombre: 'Desarollo Sustentable',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Solución de problemas y Creatividad',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Economía',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de Administración',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de comportamiento organizacional',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Fundamentos de Contabilidad',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Fundamentos de Mercadotecnia',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Seminario de Investigación',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Fundamentos de Derecho',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Matemáticas para Negocios',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Relaciones Públicas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Costos de Comercialización',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Medios Publicitarios',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Sistemas de Información de Mercadotecnia',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Introducción a la Comunicación Integral',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Comportamiento del Consumidor',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Introducción a la Venta',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Estadística Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Taller del Manejo de Base de Datos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 4
        },
        {
            nombre: 'Derecho Mercantil',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Método Estadístico',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Optativa A',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Investigación de Mercados Cuantitativa y Cualitativa',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Mercadotecnia Analítica',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Venta Especializada',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Crédito y Cobranzas',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 6
        },
        {
            nombre: 'Técnicas y Habilidades de Venta',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Tendencias Económicoas Globales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Macroeconomía',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa B',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa C',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Estudio e Interpretación de Estados Financieros',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Compras',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Mercadotecnia Directa',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Canales de Distribución y Logística',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Medios Promocionales de Venta',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Aplicaciones de Informática Comercial',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 8
        },
        {
            nombre: 'Investigación de Mercados Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Administración de Ventas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Servicio Social',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 9
        },
        {
            nombre: 'Electiva',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Dirección Estrategia Comercial',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Planeación Estratégica de la Comunicación Integral',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Proyecto de Investigación Aplicada',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 10
        },
        {
            nombre: 'Administración de Productos y Servicios',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 10
        },
        {
            nombre: 'Medición y Desarrollo de los Mercados',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 10
        },
        {
            nombre: 'Taller de Desarrollo de Negocios',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 10
        },
        {
            nombre: 'E-Commerce',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Manejo Estratégico de Proveedores',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Investigación de Operacioens para la Toma de Decisiones Mercadológicas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Mercadotecnia Internacional',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Mercadotecnia Política',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Mercadotecnia Ecológica',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Desarollo Humano Integral',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 5
        },
        {
            nombre: 'Ventas Estratégicas y Factor Humano',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Estrategia de Venta Directa',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Estrategia de Mercadotecnia Digital',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Mercadotecnia Estratégica',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Manejo de Patentes y Marcas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Franquicias y Licencias',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Procesos Mercantiles Internacionales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Administración Avanzada de Crédito y Cobranzas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Administración Detallista',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Elementos de Mercadotecnia Interactiva',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Taller de Competitividad Empresarial',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Comercialización Avanzada',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Taller de Habilidades Directivas',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Taller de Comunicación Integral',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Dirección de Operaciones Logísticas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Presentación de Proyectos para la Dirección',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Estratégica',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Temas Avanzados de Mercadotecnia',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        }
    ];

    materias_ids = [];

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

    // EST
    // Licenciatura en Turismo

    carrera = new Carrera({
        nombre: 'Licenciatura en Turismo',
        categoria: categorias[0]._id,
        semestres: 8,
        sede: sedes[26]._id,
        materias: []
    });

    await carrera.save();

    materias = [
        {
            nombre: 'Destinos y Productos Turísticos del Mundo I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos para el Análisis de la Teoría del Turismo',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Tecnologías de la Información y la Comunicación',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 1
        },
        {
            nombre: 'Desarrollo Humano',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Desarrollo de Habilidades del Pensamiento y Aprendizaje',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Destinos y Productos Turísticos del Mundo II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Turismo y Medio Ambiente',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Metodología en la Investigación Turística',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Operación y Retos de las Empresas Turísticas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Estadística Descriptiva',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Contabilidad Financiera',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Comunicación Oral y Escrita',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Administración',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Destinos y Productos Turísticos de México I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Estadística Inferencial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Marco Jurídico del Individuo y sus Responsabilidad Social',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 3
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 3
        },
        {
            nombre: 'Comportamiento Organizacional',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Destinos y Productos Turísticos de México II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Investigación de Operaciones I',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Microeconomía',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Análisis e Interpretación de los Estados Financieros',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 4
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 4
        },
        {
            nombre: 'Administración del Capital Humano',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Investigación de Mercados Turísticos',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Macroeconomía',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Investigación de Operaciones II',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Administración Financiera',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Comercialización de Productos Turísticos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Auditoría Administrativa',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Marco Legal de la Organización',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Administración Estratégica',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Dirección y Administración de Ventas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Marco Legal Turístico',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Seminario de Integración I',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Plan de Mercadotecnia',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Comercio Internacional',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 8
        },
        {
            nombre: 'Seminario de Integración II',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Cultura de Calidad en las Organizaciones Turísticas',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 8
        },
        {
            nombre: 'Creatividad e Innovación en Empresas Turísticas',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 8
        },
        {
            nombre: 'Sistemas Globalizadores de Reservaciones I',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Técnica Culinaria',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 3
        },
        {
            nombre: 'Administración de las Áreas de Contacto en Hoteles',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Gestión del Turismo Sustentable',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Transporte Áero',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Coctelería y Vitivinicultura',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 3
        },
        {
            nombre: 'Administración del Tiempo y la Recreación',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Planificación Turística',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Sistemas Globalizadores de Reservaciones II',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Administración de Cocinas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Administración de Áreas De Apoyos en Hoteles',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Sistema de Gestión Ambiental para el Turismo',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Transporte Terrestre',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Administración de Servicios de Restaurantes',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Auditoría de Ingresos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Planeación y Gestión para el Desarrollo Turístico Municipal',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Sistemas Globalizadores de Reservaciones III',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Planeación del Costo de Alimentos y Bebidas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Ventas Hoteleras y Relaciones Públicas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Ordenamiento del Espacio Turístico',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Transporte Acuático',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Ventas y Servicios de Banquetes',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Mantenimiento de Instalaciones',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Planeación y Desarrollo de Productos Turísticos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Diseño de Productos Turísticos Alternativos',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 6
        },
        {
            nombre: 'Control de Costos de Alimentos y Bebidas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Organización de Grupos y Convenciones',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Análisis del Desarrollo de las Empresas de Turismo en el Sector Social',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Normatividad, Certificación y Competencias Laborales',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Planeación y Desarrollo de Destinos Turísticos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        }
    ];

    materias_ids = [];

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

        // Facultad de Ciencias
    // Licenciatura en Actuaría

    carrera = new Carrera({
        nombre: 'Licenciatura en Actuaría',
        categoria: categorias[0]._id,
        semestres: 8,
        sede: sedes[29]._id,
        materias: []
    });

    await carrera.save();

    materias = [
        {
            nombre: 'Álgebra Superior I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo Diferencial e Integral',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Geometría Analítica',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Inglés I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Teoría del Seguro',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Álgebra Superior II',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Cálculo Diferencial e Integral II',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Contabilidad',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Geometría Analítica II',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Inglés II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Programación',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 2
        },
        {
            nombre: 'Álgebra Lineal I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Cálculo Diferencial e Integral III',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Inglés III',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Manejo de Datos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Matemáticas Financieras',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Probabilidad I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Cálculo Diferencial e Integral IV',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Ecuaciones Diferenciales I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Inglés IV',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Investigación de Operaciones',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Matemáticas Actuariales del Seguro de Personas I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Probabilidad II',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Análisis Matemático',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Economía',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Inferencia Estadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Matemáticas Actuariales del Seguro de Personas II',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Mercados Financieros y Valuación de Instrumentos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Procesos Estocásticos I',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Análisis Numérico',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 6
        },
        {
            nombre: 'Demografía',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Inglés V',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Matemáticas Actuariales para Seguro de Daños, Fianzas y Reaseguro',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 6
        },
        {
            nombre: 'Métodos Cuantitativos en Finanzas',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 6
        },
        {
            nombre: 'Modelos no Paramétricos y de Regresión',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Análisis del México Contemporáneo',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 7
        },
        {
            nombre: 'Inglés VI',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Modelos de Superviviencia y de Series de Tiempo',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Seguridad Social',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Administración Actuarial del Riesgo',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Pensiones Privadas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Teoría del Riesgo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 3
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 3
        }
    ];

    materias_ids = [];

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

        // Licenciatura en Biología

        carrera = new Carrera({
            nombre: 'Licenciatura en Biología',
            categoria: categorias[0]._id,
            semestres: 8,
            sede: sedes[29]._id,
            materias: []
        });
    
        await carrera.save();
    
        materias = [
            {
                nombre: 'Biología de Procariontes',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 1
            },
            {
                nombre: 'Filosofía e Historia de la Biología',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 1
            },
            {
                nombre: 'Física',
                carera: carrera._id,
                categoria: categoria_materias[1]._id,
                semestre: 1
            },
            {
                nombre: 'Matemáticas',
                carera: carrera._id,
                categoria: categoria_materias[0]._id,
                semestre: 1
            },
            {
                nombre: 'Química',
                carera: carrera._id,
                categoria: categoria_materias[2]._id,
                semestre: 1
            },
            {
                nombre: 'Biología de Protista y Algas',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 2
            },
            {
                nombre: 'Biología Molecular de la Célula I',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 2
            },
            {
                nombre: 'Matemáticas II',
                carera: carrera._id,
                categoria: categoria_materias[0]._id,
                semestre: 2
            },
            {
                nombre: 'Química Orgánica',
                carera: carrera._id,
                categoria: categoria_materias[2]._id,
                semestre: 2
            },
            {
                nombre: 'Sistemática',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 2
            },
            {
                nombre: 'Bioestadística',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 3
            },
            {
                nombre: 'Biología de Hongos',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 3
            },
            {
                nombre: 'Biología de Plantas I',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 3
            },
            {
                nombre: 'Biología Molecular de la Célula II',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 3
            },
            {
                nombre: 'Ciencias de la Tierra',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 3
            },
            {
                nombre: 'Biogeografía',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 4
            },
            {
                nombre: 'Biología de Animales I',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 4
            },
            {
                nombre: 'Biología de Plantas II',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 4
            },
            {
                nombre: 'Biología Molecular de la Célula III',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 4
            },
            {
                nombre: 'Biotecnología I',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 4
            },
            {
                nombre: 'Biología de Animales II',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 5
            },
            {
                nombre: 'Ecología I',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 5
            },
            {
                nombre: 'Genética I',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 5
            },
            {
                nombre: 'Paleobiología',
                carera: carrera._id,
                categoria: categoria_materias[12]._id,
                semestre: 5
            },
            {
                nombre: 'Taller Nivel 1',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 5
            },
            {
                nombre: 'Optativa',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 5
            },
            {
                nombre: 'Biología de Animales III',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 6
            },
            {
                nombre: 'Recursos Naturales',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 6
            },
            {
                nombre: 'Taller Nivel 2',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 6
            },
            {
                nombre: 'Optativa',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 6
            },
            {
                nombre: 'Evolución I',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 7
            },
            {
                nombre: 'Taller Nivel 3',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 7
            },
            {
                nombre: 'Optativa',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 7
            },
            {
                nombre: 'Optativa',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 7
            },
            {
                nombre: 'Taller Nivel 4',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 8
            },
            {
                nombre: 'Optativa',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 8
            },
            {
                nombre: 'Optativa',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 8
            }
        ];
    
        materias_ids = [];
    
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

            // Licenciatura en ciencias de la computacion

    carrera = new Carrera({
        nombre: 'Licenciatura en ciencias de la computación',
        categoria: categorias[0]._id,
        semestres: 8,
        sede: sedes[29]._id,
        materias: []
    });

    await carrera.save();

    materias = [
        {
            nombre: 'Álgebra Superior I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Estructuras Discretas',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Introducción a Ciencias de la Computación',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Inglés I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Matemática para las Ciencias Aplicadas',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Álgebra Superior II',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Estructuras de Datos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 2
        },
        {
            nombre: 'Gráficas y Juegos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 2
        },
        {
            nombre: 'Inglés II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Matemáticas para las Ciencias Aplicadas II',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Álgebra Lineal I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Matemáticas para las Ciencias Aplicadas III',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Inglés III',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Modelado y Programación',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 3
        },
        {
            nombre: 'Probabilidad I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Autómatas y Lenguajes Formales',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 4
        },
        {
            nombre: 'Inglés IV',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Lógica Computacional',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 4
        },
        {
            nombre: 'Matemáticas para las Ciencias Aplicadas IV',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Organización y Arquitectura de Computadoras',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 4
        },
        {
            nombre: 'Análisis de Algoritmos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 5
        },
        {
            nombre: 'Computación Distribuida',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 5
        },
        {
            nombre: 'Fundamentos de Bases de Datos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 5
        },
        {
            nombre: 'Inglés V',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 5
        },
        {
            nombre: 'Lenguajes de Programación',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 5
        },
        {
            nombre: 'Ingeniería de Software',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 6
        },
        {
            nombre: 'Inteligencia Artificial',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 6
        },
        {
            nombre: 'Sistemas Operativos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Compiladores',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 7
        },
        {
            nombre: 'Complejidad Computacional',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 7
        },
        {
            nombre: 'Redes de Computadoras',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Computación Concurrente',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 8
        },
        {
            nombre: 'Criptografía y Seguridad',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 8
        },
        {
            nombre: 'Inglés VI',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        }
    ];

    materias_ids = [];

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

        // Licenciatura en ciencias de la tierra

        carrera = new Carrera({
            nombre: 'Licenciatura en ciencias de la tierra',
            categoria: categorias[0]._id,
            semestres: 8,
            sede: sedes[29]._id,
            materias: []
        });
    
        await carrera.save();
    
        materias = [
            {
                nombre: 'Biología General',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 1
            },
            {
                nombre: 'Geología General',
                carera: carrera._id,
                categoria: categoria_materias[12]._id,
                semestre: 1
            },
            {
                nombre: 'Introducción a las Ciencias de la Tierra',
                carera: carrera._id,
                categoria: categoria_materias[12]._id,
                semestre: 1
            },
            {
                nombre: 'Matemáticas para las Ciencias de la Tierra',
                carera: carrera._id,
                categoria: categoria_materias[0]._id,
                semestre: 1
            },
            {
                nombre: 'Química general',
                carera: carrera._id,
                categoria: categoria_materias[2]._id,
                semestre: 1
            },
            {
                nombre: 'Biodiversidad',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 2
            },
            {
                nombre: 'Matemáticas para las Ciencias de la Tierra II',
                carera: carrera._id,
                categoria: categoria_materias[0]._id,
                semestre: 2
            },
            {
                nombre: 'Mecánica Vectorial',
                carera: carrera._id,
                categoria: categoria_materias[1]._id,
                semestre: 2
            },
            {
                nombre: 'Química Orgánica',
                carera: carrera._id,
                categoria: categoria_materias[2]._id,
                semestre: 2
            },
            {
                nombre: 'Sedimentología y Estratigrafía',
                carera: carrera._id,
                categoria: categoria_materias[12]._id,
                semestre: 2
            },
            {
                nombre: 'Ecología',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 3
            },
            {
                nombre: 'Fenómenos Colectivos',
                carera: carrera._id,
                categoria: categoria_materias[12]._id,
                semestre: 3
            },
            {
                nombre: 'Introducción a la Geodinámica',
                carera: carrera._id,
                categoria: categoria_materias[12]._id,
                semestre: 3
            },
            {
                nombre: 'Matemáticas para las Ciencias de la Tierra III',
                carera: carrera._id,
                categoria: categoria_materias[0]._id,
                semestre: 3
            },
            {
                nombre: 'Técnicas Experimentales',
                carera: carrera._id,
                categoria: categoria_materias[12]._id,
                semestre: 3
            },
            {
                nombre: 'Geoquímica',
                carera: carrera._id,
                categoria: categoria_materias[12]._id,
                semestre: 4
            },
            {
                nombre: 'Interacciones e Historia de los Sistemas Terrestres',
                carera: carrera._id,
                categoria: categoria_materias[12]._id,
                semestre: 4
            },
            {
                nombre: 'Matemáticas para las Ciencias de la Tierra IV',
                carera: carrera._id,
                categoria: categoria_materias[0]._id,
                semestre: 4
            },
            {
                nombre: 'Sistemas Acuáticos',
                carera: carrera._id,
                categoria: categoria_materias[12]._id,
                semestre: 4
            },
            {
                nombre: 'Sistemas Atmosféricos',
                carera: carrera._id,
                categoria: categoria_materias[12]._id,
                semestre: 4
            },
            {
                nombre: 'Estadística Aplicada',
                carera: carrera._id,
                categoria: categoria_materias[0]._id,
                semestre: 5
            },
            {
                nombre: 'Fenómenos Electromagnéticos',
                carera: carrera._id,
                categoria: categoria_materias[1]._id,
                semestre: 5
            },
            {
                nombre: 'Electiva',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 5
            },
            {
                nombre: 'Electiva',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 5
            },
            {
                nombre: 'Optativa',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 6
            },
            {
                nombre: 'Electiva',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 6
            },
            {
                nombre: 'Electiva',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 6
            },
            {
                nombre: 'Electiva',
                carera: carrera._id,
                categoria: categoria_materias[8]._id,
                semestre: 6
            },
            {
                nombre: 'Optativa',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 7
            },
            {
                nombre: 'Electiva',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 7
            },
            {
                nombre: 'Electiva',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 7
            },
            {
                nombre: 'Electiva',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 7
            },
            {
                nombre: 'Políticas y Normatividad en el Manejo de los Sistemas Terráqueos',
                carera: carrera._id,
                categoria: categoria_materias[8]._id,
                semestre: 8
            },
            {
                nombre: 'Optativa',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 8
            },
            {
                nombre: 'Electiva',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 8
            },
            {
                nombre: 'Electiva',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 8
            },
            {
                nombre: 'Electiva',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 8
            },
        ];
    
        materias_ids = [];
    
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

            // Licenciatura en Física

    carrera = new Carrera({
        nombre: 'Licenciatura en Física',
        categoria: categorias[0]._id,
        semestres: 9,
        sede: sedes[29]._id,
        materias: []
    });

    await carrera.save();

    materias = [
        {
            nombre: 'Álgebra',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo Diferencial e Integral I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Computación',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Física Contemporánea',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Geometría Analítica I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo Diferencial e Integral II',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Geometría Analítica II',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Laboratorio de Mecánica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Mecánica Vectorial',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Álgebra Lineal I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Cálculo Diferencial e Integral III',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Fenómenos Colectivos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Laboratorio de Fenómenos Colectivos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Cálculo Diferencial e Integral IV',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Ecuaciones Diferenciales I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Electromagnetismo I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Laboratorio de Electromagnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Introducción a la Física Cuántica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Laboratorio de Óptica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Óptica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Variable Compleja I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Matemáticas Avanzadas de la Física',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 6
        },
        {
            nombre: 'Mecánica Analítica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Relatividad',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Termodinámica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Electromagnetismo II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Física Computacional',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Laboratorio de Electrónica',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Mecánica Cuántica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Dinámica de Medios Deformables',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Física Atómica y Materia Condensada',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Física Estadística',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Laboratorio de Física Contemporánea',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Física Nuclear y Subnuclear',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Laboratorio de Física Contemporánea II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        }
    ];

    materias_ids = [];

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

        // Licenciatura en física biomédica

        carrera = new Carrera({
            nombre: 'Licenciatura en física biomédica',
            categoria: categorias[0]._id,
            semestres: 8,
            sede: sedes[29]._id,
            materias: []
        });
    
        await carrera.save();
    
        materias = [
            {
                nombre: 'Álgebra',
                carera: carrera._id,
                categoria: categoria_materias[0]._id,
                semestre: 1
            },
            {
                nombre: 'Cálculo Diferencial e Integral I',
                carera: carrera._id,
                categoria: categoria_materias[0]._id,
                semestre: 1
            },
            {
                nombre: 'Inglés',
                carera: carrera._id,
                categoria: categoria_materias[3]._id,
                semestre: 1
            },
            {
                nombre: 'Introducción a la Física del Cuerpo Humano',
                carera: carrera._id,
                categoria: categoria_materias[1]._id,
                semestre: 1
            },
            {
                nombre: 'Metodología de la Física Experimental',
                carera: carrera._id,
                categoria: categoria_materias[1]._id,
                semestre: 1
            },
            {
                nombre: 'Bioquímica',
                carera: carrera._id,
                categoria: categoria_materias[2]._id,
                semestre: 2
            },
            {
                nombre: 'Cálculo Diferencial e Integral II',
                carera: carrera._id,
                categoria: categoria_materias[0]._id,
                semestre: 2
            },
            {
                nombre: 'Geometría Analítica I',
                carera: carrera._id,
                categoria: categoria_materias[0]._id,
                semestre: 2
            },
            {
                nombre: 'Inglés',
                carera: carrera._id,
                categoria: categoria_materias[3]._id,
                semestre: 2
            },
            {
                nombre: 'Mecánica Vectorial',
                carera: carrera._id,
                categoria: categoria_materias[1]._id,
                semestre: 2
            },
            {
                nombre: 'Medición y Análisis en la Física Experimental',
                carera: carrera._id,
                categoria: categoria_materias[1]._id,
                semestre: 2
            },
            {
                nombre: 'Álgebra Lineal',
                carera: carrera._id,
                categoria: categoria_materias[0]._id,
                semestre: 3
            },
            {
                nombre: 'Cálculo Avanzado',
                carera: carrera._id,
                categoria: categoria_materias[0]._id,
                semestre: 3
            },
            {
                nombre: 'Fenómenos Colectivos',
                carera: carrera._id,
                categoria: categoria_materias[0]._id,
                semestre: 3
            },
            {
                nombre: 'Inglés',
                carera: carrera._id,
                categoria: categoria_materias[3]._id,
                semestre: 3
            },
            {
                nombre: 'Instrumentación y Calibración',
                carera: carrera._id,
                categoria: categoria_materias[1]._id,
                semestre: 3
            },
            {
                nombre: 'Morfofuncional I',
                carera: carrera._id,
                categoria: categoria_materias[1]._id,
                semestre: 3
            },
            {
                nombre: 'Algoritmos Computacionales',
                carera: carrera._id,
                categoria: categoria_materias[6]._id,
                semestre: 4
            },
            {
                nombre: 'Ecuaciones Diferenciales',
                carera: carrera._id,
                categoria: categoria_materias[0]._id,
                semestre: 4
            },
            {
                nombre: 'Elaboración y Desarrollo de Proyectos Experimentales',
                carera: carrera._id,
                categoria: categoria_materias[8]._id,
                semestre: 4
            },
            {
                nombre: 'Electromagnetismo I',
                carera: carrera._id,
                categoria: categoria_materias[1]._id,
                semestre: 4
            },
            {
                nombre: 'Inglés',
                carera: carrera._id,
                categoria: categoria_materias[3]._id,
                semestre: 4
            },
            {
                nombre: 'Morfofuncional II',
                carera: carrera._id,
                categoria: categoria_materias[1]._id,
                semestre: 4
            },
            {
                nombre: 'Optativa',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 4
            },
            {
                nombre: 'Anatomía Radiológica',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 5
            },
            {
                nombre: 'Física Computacional',
                carera: carrera._id,
                categoria: categoria_materias[6]._id,
                semestre: 5
            },
            {
                nombre: 'Inglés',
                carera: carrera._id,
                categoria: categoria_materias[3]._id,
                semestre: 5
            },
            {
                nombre: 'Introducción a la Física Cuántica',
                carera: carrera._id,
                categoria: categoria_materias[1]._id,
                semestre: 5
            },
            {
                nombre: 'Matemáticas Avanzadas',
                carera: carrera._id,
                categoria: categoria_materias[0]._id,
                semestre: 5
            },
            {
                nombre: 'Óptica',
                carera: carrera._id,
                categoria: categoria_materias[1]._id,
                semestre: 5
            },
            {
                nombre: 'Bioestadística',
                carera: carrera._id,
                categoria: categoria_materias[4]._id,
                semestre: 6
            },
            {
                nombre: 'Electromagnetismo II',
                carera: carrera._id,
                categoria: categoria_materias[1]._id,
                semestre: 6
            },
            {
                nombre: 'Física del Cuerpo Humano',
                carera: carrera._id,
                categoria: categoria_materias[1]._id,
                semestre: 6
            },
            {
                nombre: 'Inglés',
                carera: carrera._id,
                categoria: categoria_materias[3]._id,
                semestre: 6
            },
            {
                nombre: 'Interacción de la Radiación con la Materia',
                carera: carrera._id,
                categoria: categoria_materias[2]._id,
                semestre: 6
            },
            {
                nombre: 'Termofísica',
                carera: carrera._id,
                categoria: categoria_materias[1]._id,
                semestre: 6
            },
            {
                nombre: 'Instrumentación Biomédica',
                carera: carrera._id,
                categoria: categoria_materias[14]._id,
                semestre: 7
            },
            {
                nombre: 'Introducción a la Oncología',
                carera: carrera._id,
                categoria: categoria_materias[14]._id,
                semestre: 7
            },
            {
                nombre: 'Mecánica Cuántica',
                carera: carrera._id,
                categoria: categoria_materias[1]._id,
                semestre: 7
            },
            {
                nombre: 'Práctica Profesional Supervisada',
                carera: carrera._id,
                categoria: categoria_materias[14]._id,
                semestre: 7
            },
            {
                nombre: 'Electiva',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 7
            },
            {
                nombre: 'Electiva',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 7
            },
            {
                nombre: 'Imagenología Biomédidca',
                carera: carrera._id,
                categoria: categoria_materias[12]._id,
                semestre: 8
            },
            {
                nombre: 'Seguridad Radiológica',
                carera: carrera._id,
                categoria: categoria_materias[12]._id,
                semestre: 8
            },
            {
                nombre: 'Optativa',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 8
            },
            {
                nombre: 'Optativa',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 8
            },
            {
                nombre: 'Optativa',
                carera: carrera._id,
                categoria: categoria_materias[9]._id,
                semestre: 8
            }
        ];
    
        materias_ids = [];
    
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

            // Licenciatura en Manejo Sustentable de Zonas Costeras

    carrera = new Carrera({
        nombre: 'Licenciatura en Manejo Sustentable de Zonas Costeras',
        categoria: categorias[0]._id,
        semestres: 8,
        sede: sedes[29]._id,
        materias: []
    });

    await carrera.save();

    materias = [
        {
            nombre: 'Ecología y Evolución',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 1
        },
        {
            nombre: 'Filosofía y Ética de la Ciencia',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Introducción al Estudio de los Sistemas Costeros',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 1
        },
        {
            nombre: 'Matemáticas I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Química y Física del Agua',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Ecofisiología',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 2
        },
        {
            nombre: 'Geografía Física y Humana',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 2
        },
        {
            nombre: 'Matemáticas II',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Metodología de la Investigación',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 2
        },
        {
            nombre: 'Producción y Aprovechamiento de la Zona Costera I',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 2
        },
        {
            nombre: 'Ecología de Poblaciones y Comunidades',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 3
        },
        {
            nombre: 'Métodos de Campo y Laboratorio',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 3
        },
        {
            nombre: 'Oceanografía y Procesos Costeros',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 3
        },
        {
            nombre: 'Probabilidad y Estadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Producción y Aprovechamiento de la Zona Costera II',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 3
        },
        {
            nombre: 'Ecología Energética',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 4
        },
        {
            nombre: 'Estancia de Investigación I',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Geología Ambiental Costera',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 4
        },
        {
            nombre: 'Impacto Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 4
        },
        {
            nombre: 'Planeación y Análisis de Experimentos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Alteración de los Sistemas Costeros',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Análisis Multivariado',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Estancia de Investigación II',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Genética y Biodiversidad',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 5
        },
        {
            nombre: 'Legislación y Administración de la Zona Costera',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Conservación de la Biodiversidad',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 6
        },
        {
            nombre: 'Economía Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 6
        },
        {
            nombre: 'Estancia de Investigación III',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Manejo Sustentable de la Zona Costera',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Restauración de los Sistemas Costeros',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Seminario de Titulación I',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Seminario de Titulación I',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        }
    ];

    materias_ids = [];

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

             // Licenciatura en Matemáticas

             carrera = new Carrera({
                nombre: 'Licenciatura en Matemáticas',
                categoria: categorias[0]._id,
                semestres: 8,
                sede: sedes[29]._id,
                materias: []
            });
        
            await carrera.save();
        
            materias = [
                {
                    nombre: 'Álgebra Superior I',
                    carera: carrera._id,
                    categoria: categoria_materias[0]._id,
                    semestre: 1
                },
                {
                    nombre: 'Cálculo Diferencial e Integral I',
                    carera: carrera._id,
                    categoria: categoria_materias[0]._id,
                    semestre: 1
                },
                {
                    nombre: 'Geometría Analítica I',
                    carera: carrera._id,
                    categoria: categoria_materias[0]._id,
                    semestre: 1
                },
                {
                    nombre: 'Geometría Moderna I',
                    carera: carrera._id,
                    categoria: categoria_materias[0]._id,
                    semestre: 1
                },
                {
                    nombre: 'Álgebra Superior II',
                    carera: carrera._id,
                    categoria: categoria_materias[0]._id,
                    semestre: 2
                },
                {
                    nombre: 'Cálculo Diferencial e Integral II',
                    carera: carrera._id,
                    categoria: categoria_materias[0]._id,
                    semestre: 2
                },
                {
                    nombre: 'Geometría Analítica II',
                    carera: carrera._id,
                    categoria: categoria_materias[0]._id,
                    semestre: 2
                },
                {
                    nombre: 'Optativa',
                    carera: carrera._id,
                    categoria: categoria_materias[9]._id,
                    semestre: 2
                },
                {
                    nombre: 'Álgebra Lineal I',
                    carera: carrera._id,
                    categoria: categoria_materias[0]._id,
                    semestre: 3
                },
                {
                    nombre: 'Cálculo Diferencial e Integral III',
                    carera: carrera._id,
                    categoria: categoria_materias[0]._id,
                    semestre: 3
                },
                {
                    nombre: 'Optativa',
                    carera: carrera._id,
                    categoria: categoria_materias[9]._id,
                    semestre: 3
                },
                {
                    nombre: 'Álgebra Lineal II',
                    carera: carrera._id,
                    categoria: categoria_materias[0]._id,
                    semestre: 4
                },
                {
                    nombre: 'Cálculo Diferencial e Integral IV',
                    carera: carrera._id,
                    categoria: categoria_materias[0]._id,
                    semestre: 4
                },
                {
                    nombre: 'Ecuaciones Diferenciales',
                    carera: carrera._id,
                    categoria: categoria_materias[0]._id,
                    semestre: 4
                },
                {
                    nombre: 'Optativa',
                    carera: carrera._id,
                    categoria: categoria_materias[9]._id,
                    semestre: 4
                },
                {
                    nombre: 'Álgebra Moderna I',
                    carera: carrera._id,
                    categoria: categoria_materias[0]._id,
                    semestre: 5
                },
                {
                    nombre: 'Análisis Matemático',
                    carera: carrera._id,
                    categoria: categoria_materias[0]._id,
                    semestre: 5
                },
                {
                    nombre: 'Variable Compleja I',
                    carera: carrera._id,
                    categoria: categoria_materias[0]._id,
                    semestre: 5
                },
                {
                    nombre: 'Optativa',
                    carera: carrera._id,
                    categoria: categoria_materias[9]._id,
                    semestre: 5
                },
                {
                    nombre: 'Análisis Matemático II',
                    carera: carrera._id,
                    categoria: categoria_materias[0]._id,
                    semestre: 6
                },
                {
                    nombre: 'Optativo',
                    carera: carrera._id,
                    categoria: categoria_materias[9]._id,
                    semestre: 6
                },
                {
                    nombre: 'Optativa',
                    carera: carrera._id,
                    categoria: categoria_materias[9]._id,
                    semestre: 7
                },
                {
                    nombre: 'Optativa',
                    carera: carrera._id,
                    categoria: categoria_materias[9]._id,
                    semestre: 8
                }
            ];
        
            materias_ids = [];
        
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

exports.work = carga_carreras_medinavilla;