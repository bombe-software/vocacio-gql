//Llamada de modelos
const mongoose = require('mongoose');
const async = require('async');
const Universidad = mongoose.model('universidad');
const Sede = mongoose.model('sede');
const Carrera = mongoose.model('carrera');
const Materia = mongoose.model('materia');
const Categoria = mongoose.model('categoria');


async function carga_carreras_yosafat(categorias, categoria_materias, sedes) {
    let carrera = new Carrera({
        nombre: 'Ingeniería Matemática',
        categoria: categorias[0]._id,
        semestres: 8,
        sede: sedes[3]._id,
        materias: []
    });

    await carrera.save();
    let materias = [
        {
            nombre: 'Sociedad y Conocimiento',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Álgebra I',
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
            nombre: 'Informática Básica',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 1
        },
        {
            nombre: 'Herramientas computacionales',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 1
        },
        {
            nombre: 'Introducción a la Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Cálculo II',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Álgebra II',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Matemáticas Discretas',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Programación',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 2
        },
        {
            nombre: 'Economía',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Cálculo III',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Álgebra III',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Ecuaciones Diferenciales Ordinarias I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Métodos Numéricos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Ingeniería Económica',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Física I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Optimización Lineal',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Ecuaciones Diferenciales Ordinarias II: Teoría y Métodos Numéricos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Métodos Numéricos II',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Formulación y Evaluación de Proyectos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Física II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Análisis Matemático',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Ecuaciones Diferenciales Parciales I: Teoría y Métodos Numéricos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Probabilidad',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Ingeniería Industrial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Finanzas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Análisis de Decisiones',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 6
        },
        {
            nombre: 'Optimización no Lineal',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 6
        },
        {
            nombre: 'Ecuaciones Diferenciales Parciales II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Física III',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Estadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 6
        },
        {
            nombre: 'Administración de la Producción',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Sistemas Financieros y Comerciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 7
        },
        {
            nombre: 'Econometría',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 7
        },
        {
            nombre: 'Investigación de Operaciones',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 7
        },
        {
            nombre: 'Simulación I',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 7
        },
        {
            nombre: 'Estadística Avanzada',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 7
        },
        {
            nombre: 'Procesos Estocásticos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 7
        },
        {
            nombre: 'Ingeniería de Calidad y Reingeniería',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Ingeniería Financiera',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 8
        },
        {
            nombre: 'Seminario de Titulación',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 8
        },
        {
            nombre: 'Seminario de Modelación Industrial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Financiera',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 8
        },
        {
            nombre: 'Simulación II',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 8
        },
        {
            nombre: 'Sistema de Calidad',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        }
    ];

    let materias_ids = [];

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
        nombre: 'Licenciatura en Física y Matemáticas',
        categoria: categorias[0]._id,
        semestres: 8,
        sede: sedes[3]._id,
        materias: []
    });

    await carrera.save();
    materias = [
        {
            nombre: 'Cálculo I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Álgebra I',
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
            nombre: 'Física I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Cálculo II',
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
            nombre: 'Álgebra II',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Física II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Análisis Vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Cálculo III',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Álgebra III',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Física II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Programación I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 3
        },
        {
            nombre: 'Geometría Proyectiva',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 3
        },
        //Opción de Matemáticas Educativas
        {
            nombre: 'Cálculo IV',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Física IV',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Álgebra IV',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Programación II',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 4
        },
        {
            nombre: 'Análisis',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Didáctica General',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 5
        },
        {
            nombre: 'Historia de las Matemáticas',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 5
        },
        {
            nombre: 'Álgebra y Geometría',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Probabilidad y Estadística I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 6
        },
        {
            nombre: 'Taller Pedagógico I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Tópicos en Ecuaciones Diferenciales I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Geometría I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Taller Pedagógico II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Filosofía de la Ciencia',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Tópicos en Ecuaciones Diferenciales II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Geometría II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Seminario de la Problemática Educativa Nacional',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Filosofía de la Ciencia II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 8
        },
        {
            nombre: 'Variable Compleja',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Temas Aplicativos de la Matemática',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        //Opción en Física
        {
            nombre: 'Cálculo IV',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Física IV',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Introducción a Métodos Matemáticos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Circuitos Eléctricos',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 4
        },
        {
            nombre: 'Física Teórica I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Introducción a Física Moderna',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Labotorio I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Métodos Matemáticos I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Curso Especial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Curso Especial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Física Teórica II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Mecánica Cuántica I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Métodos Matemáticos I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Métodos Matemáticos II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Laboratorio I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Laboratorio II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Laboratorio III',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Laboratorio IV',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Electrónica Funcional I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Curso Especial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Curso Especial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Física Teórica III',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Mecánica Cuántica II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Métodos Matemáticos II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Introducción a Física del Estado Sólido',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Teoría del Control I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Laboratorio I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Laboratorio II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Laboratorio III',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Laboratorio IV',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Eléctronica Funcional II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Curso Especial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Curso Especial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Física Estadística',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Física Teórica IV',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Radiación y Propagación',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Introducción a la Física Atómica y Molecular',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Teoría del Control II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Laboratorio I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Laboratorio II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Laboratorio III',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Laboratorio IV',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Curso Especial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Curso Especial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        //Opción en Matemáticas
        {
            nombre: 'Cálculo IV',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Física IV',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Álgebra IV',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Programación II',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 4
        },
        {
            nombre: 'Análisis Matemático I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Álgebra Moderna I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Geometría Diferencial I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Lenguaje Ensamblador',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Probabilidad I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Métodos Numéricos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Curso Especial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Curso Especial',
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
            nombre: 'Introducción a Funciones de Variable Compleja',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Álgebra Moderna II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Geometría Diferencial II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Introducción a Sistemas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Programación Lineal',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Probabilidad II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Análisis Numérico I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Curso Especial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Curso Especial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Análisis Matemático III',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Funciones de Variable Compleja I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Teoría de Ecuaciones Diferenciales I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Álgebra Moderna III',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Geometría Diferencial III',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Topología I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Fundamentos de Computación',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Investigación de Operaciones I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Estadística I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Análisis Numérico II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Curso Especial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Curso Especial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Análisis Matemático IV',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Funciones de Variable Compleja II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Teoría de Ecuaciones Diferenciales II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Álgebra Moderna IV',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Topología II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Arquitectura de una Computadora',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Investigación de Operaciones II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Estadística II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Análisis Numérico III',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Curso Especial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Curso Especial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        //Opción en Ingeniería Nuclear
        {
            nombre: 'Cálculo IV',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Física IV',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Introducción a Métodos Matemáticos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Programación II',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 4
        },
        {
            nombre: 'Física Teórica I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Introducción a Física Moderna',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Métodos Numéricos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Introducción a la Ingeniería Nuclear',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Mecánica Cuántica I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Probabilidad I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Termodinámica de Ciclos de Potencia',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Tranferencia de Calor',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Física Teórica III',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Mecánica Cuántica II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Ingeniería Nuclear I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Teoría de Reactores Nucleares I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Laboratorio III',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Ingeniería Nuclear II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Teoría de Reactores Nucleares II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Protección Radiológica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
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

exports.work = carga_carreras_yosafat;