//Llamada de modelos
const mongoose = require('mongoose');
const async = require('async');
const Universidad = mongoose.model('universidad');
const Sede = mongoose.model('sede');
const Carrera = mongoose.model('carrera');
const Materia = mongoose.model('materia');
const Categoria = mongoose.model('categoria');

async function carga_carreras_rubenhdez(categorias, categoria_materias, sedes){

    //** ENCB

    //! Licenciatura en Biología POR NIVELES 

    // Químico Bacteriólogo Parasitólogo
    let carrera = new Carrera({
        nombre: 'Químico Bacteriólogo Parasitólogo',
        categoria: categorias[1]._id,
        semestres: 10,
        sede: sedes[21]._id,
        materias: []
    });

    await carrera.save();

    let materias = [
        {
            nombre: 'Biología Celular de Eucariotes',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 1
        },
        {
            nombre: 'Histología y Organografía Microscópica',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 1
        },
        {
            nombre: 'Matemáticas Básicas',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Química Inorgánica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Bioestadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Bioética',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Fisicoquímica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
        nombre: 'Química Orgánica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Desarrollo Sustentable',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Microbiología General',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 3
        },
        {
            nombre: 'Química Analítica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Química Bioorgánica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Metodología de la Investigación',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Bioquímica General',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 4
        },
        {
            nombre: 'Fisiología Humana',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 4
        },
        {
            nombre: 'Biotecnología Vegetal',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 4
        },
        {
            nombre: 'Ecología Microbiana',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 4
        },
        {
            nombre: 'Fisiología y Bioquímica Microbiana',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 5
        },
        {
            nombre: 'Métodos de Análisis',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 5
        },
        {
            nombre: 'Micología Médica',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 5
        },
        {
            nombre: 'Genética Microbiana',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 6
        },
        {
            nombre: 'Inmunología',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 6
        },
        {
            nombre: 'Microbiología del Suelo',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 6
        },
        {
            nombre: 'Patología',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 6
        },
        {
            nombre: 'Bacteriología Médica',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 7
        },
        {
            nombre: 'Biología Molecular',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 7
        },
        {
            nombre: 'Protozoología Médica y Veterinaria',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Métodos Espectroscópicos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Métodos Instrumentales en Microbiología',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Bioinformática',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 8
        },
        {
            nombre: 'Biotecnología Microbiana',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 8
        },
        {
            nombre: 'Helmintos y Artrópodos de Interés Médico y Veterinario',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 8
        },
        {
            nombre: 'Virología',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 8
        },
        {
            nombre: 'Microbiología Veterinaria',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Inmunología Diagnóstica y Biotecnologíca',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Gestión de Calidad',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Bioquímica Clínica',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 9
        },
        {
            nombre: 'Fitopatología',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 9
        },
        {
            nombre: 'Hematología',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa III',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Ciencias Genómicas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Banco de Sangre',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Biotecnología y Gestión de Calidad Farmacéuticas',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 10
        },
        {
            nombre: 'Sistemas de Control de Calidad en el Laboratorio Clínico',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 10
        },
        {
            nombre: 'Microbiología y Toxicología de Alimentos',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
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

}

exports.work = carga_carreras_rubenhdez;