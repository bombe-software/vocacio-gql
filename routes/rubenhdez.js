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

    // Químico Farmacéutico Industrial
    carrera = new Carrera({
        nombre: 'Químico Farmacéutico Industrial',
        categoria: categorias[1]._id,
        semestres: 9,
        sede: sedes[21]._id,
        materias: []
    });

    await carrera.save();

    materias = [
        {
            nombre: 'Anatomía Humana',
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
            nombre: 'Química Inorgánica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Comunicación Oral y Escrita',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Problemas Sociales y la Profesión',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Bioestadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Física Farmacéutica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Química Orgánica I',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Psicosociología de las Relaciones Humanas',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Análisis de la Lectura',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Bioquímica General',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 3
        },
        {
            nombre: 'Botánica Aplicada a la Farmacia',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 3
        },
        {
            nombre: 'Tópicos Selectos de Fisicoquímica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Química Orgánica II',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Química Analítica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 4
        },
        {
            nombre: 'Fisicoquímica Farmacéutica',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 4
        },
        {
            nombre: 'Fisiología Celular',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 4
        },
        {
            nombre: 'Fisiología Humana',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 5
        },
        {
            nombre: 'Introducción a la Ingeniería Farmacéutica',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 5
        },
        {
            nombre: 'Química Orgánica de Fármacos Heterocíclicos',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 5
        },
        {
            nombre: 'Inmunología General',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 5
        },
        {
            nombre: 'Microbiología General',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 6
        },
        {
            nombre: 'Metodos de Separación e Instrumentación Analítica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 6
        },
        {
            nombre: 'Perspectivas del Área Profesional',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Farmacología General y Quimioterapia',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 6
        },
        {
            nombre: 'Legislación Farmacéutica',
            carera: carrera._id,
            categoria: categoria_materias[17]._id,
            semestre: 6
        },
        {
            nombre: 'Bases Farmacológicas de la Terapéutica',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 7
        },
        {
            nombre: 'Fitoquímica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 7
        },
        {
            nombre: 'Sistemas de Calidad',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Tecnología Farmacéutica I',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 7
        },
        {
            nombre: 'Proyecto de Titulación I',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 7
        },
        {
            nombre: 'Administración Farmaceútica',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Control de Calidad Farmacéutico',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 8
        },
        {
            nombre: 'Tecnología Farmacéutica II',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 8
        },
        {
            nombre: 'Biofarmacia',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 8
        },
        {
            nombre: 'Proyecto de Titulación II',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 8
        },
        {
            nombre: 'Aseguramiento de la Calidad',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 9
        },
        {
            nombre: 'Toxicología General',
            carera: carrera._id,
            categoria: categoria_materias[14]._id,
            semestre: 9
        },
        {
            nombre: 'Control Biológico de Medicamentos',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 9
        },
        {
            nombre: 'Desarrollo de Sistemas de Suministro de Fármacos',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Proyecto de Titulación III',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 9
        },
        {
            nombre: 'Atención y Servicios Farmacéuticos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Biotecnología Farmacéutica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Integración de Elementos para la Investigación Farmacéutica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Electiva',
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

    //Ingeniería Bioquímica
    carrera = new Carrera({
        nombre: 'Ingeniería Bioquímica',
        categoria: categorias[2]._id,
        semestres: 9,
        sede: sedes[21]._id,
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
            nombre: 'Desarrollo del Pensamiento Científico y Empresarial',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Física General',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Liderazgo y Grupos de Trabajo',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Química Inorgánica',
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
            nombre: 'Electricidad y Magnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Fisicoquímica I',
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
            nombre: 'Bioquímica y Biología Molecular',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 3
        },
        {
            nombre: 'Fisicoquímica II',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Ingeniería Termodinámica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Métodos Químicos de Análisis',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Balance de Masa y Energía',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 4
        },
        {
            nombre: 'Bioestadística',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Fenómenos de Transporte',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Métodos de Análisis',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 4
        },
        {
            nombre: 'Microbiología General',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 4
        },
        {
            nombre: 'Administración Industrial',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Bioquímica y Análisis de Alimentos de Origen Animal',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 5
        },
        {
            nombre: 'Bioquímica y Análisis de Alimentos de Origen Vegetal',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 5
        },
        {
            nombre: 'Bioquímica Microbiana',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 5
        },
        {
            nombre: 'Operaciones de Transferencia de Momento',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Evaluación y Normalización de Alimentos',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 6
        },
        {
            nombre: 'Legislación y Competencias Laborales',
            carera: carrera._id,
            categoria: categoria_materias[17]._id,
            semestre: 6
        },
        {
            nombre: 'Métodos Numéricos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 6
        },
        {
            nombre: 'Microbiología Industrial',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 6
        },
        {
            nombre: 'Operaciones de Transferencia de Calor',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Problemas y Perspectivas Socioeconómicas de México',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Bioingeniería I',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 7
        },
        {
            nombre: 'Ingeniería de Alimentos',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 7
        },
        {
            nombre: 'Ingeniería Económica',
            carera: carrera._id,
            categoria: categoria_materias[18]._id,
            semestre: 7
        },
        {
            nombre: 'Ingeniería Mecánica y Eléctrica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Operaciones de Transferencia de Masa I',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 7
        },
        {
            nombre: 'Proyecto de Titulación I',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 7
        },
        {
            nombre: 'Administración de Calidad',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Bioingeniería II',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 8
        },
        {
            nombre: 'Medición y Control de Procesos',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 8
        },
        {
            nombre: 'Operaciones de Transferencia de Masa II',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Proyecto de Titulación II',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 8
        },
        {
            nombre: 'Tecnología de Alimentos',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 8
        },
        {
            nombre: 'Administración de la Producción',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Diseño y Desarrollo de Productos Alimenticios',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 9
        },
        {
            nombre: 'Evaluación Ambiental y Desarrollo Sustentable',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 9
        },
        {
            nombre: 'Ingeniería de Fermentaciones',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 9
        },
        {
            nombre: 'Ingeniería de Procesos',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 9
        },
        {
            nombre: 'Proyecto de Titulación III',
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

    //TODO: Ingeniería en Sistemas Ambientales
    //! Opciones de materias por trayectoria

    //** Facultad de Arquitectura

    // Licenciatura de Arquitectura
    carrera = new Carrera({
        nombre: 'Licenciatura de Arquitectura',
        categoria: categorias[0]._id,
        semestres: 10,
        sede: sedes[27]._id,
        materias: []
    });

    await carrera.save();

    materias = [
        {
            nombre: 'Taller Integral I',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 1
        },
        {
            nombre: 'Geometría I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Expresión Gráfica I',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 1
        },
        {
            nombre: 'Arqueología del Hábitat I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Teorización del Entorno I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Matemáticas',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Sistemas Ambientales I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Taller Integral II',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 2
        },
        {
            nombre: 'Geometría II',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Expresión Gráfica II',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 2
        },
        {
            nombre: 'Arqueología del Hábitat II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Teorización del Entorno II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Sistemas Estructurales Básicos I',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 2
        },
        {
            nombre: 'Sistemas Ambientales II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Taller Integral de Arquitectura I',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 3
        },
        {
            nombre: 'Geometría III',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Expresión Arquitectónica I',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 3
        },
        {
            nombre: 'Historia de la Arquitecura I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Teoría de la Arquitectura I',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 3
        },
        {
            nombre: 'Sistemas Estructurales Básicos II',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 3
        },
        {
            nombre: 'Sistemas Urbano Arquitectónicos I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Extensión Universitaria I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Taller Integral de Arquitectura II',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 4
        },
        {
            nombre: 'Expresión Arquitectónica II',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 4
        },
        {
            nombre: 'Historia de la Arquitecura II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Teoría de la Arquitectura II',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 4
        },
        {
            nombre: 'Sistemas Estructurales Básicos II',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 4
        },
        {
            nombre: 'Sistemas de Instalaciones I',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 4
        },
        {
            nombre: 'Sistemas Urbano Arquitectónicos II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Extensión Universitaria II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Taller Integral de Arquitectura III',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 5
        },
        {
            nombre: 'Expresión Arquitectónica III',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 5
        },
        {
            nombre: 'Historia de la Arquitecura III',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 5
        },
        {
            nombre: 'Teoría de la Arquitectura III',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 5
        },
        {
            nombre: 'Sistemas Estructurales I',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 5
        },
        {
            nombre: 'Sistemas de Instalaciones II',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 5
        },
        {
            nombre: 'Proceso de Diseño Urbano Ambiental I',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 5
        },
        {
            nombre: 'Extensión Universitaria III',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 5
        },
        {
            nombre: 'Taller Integral de Arquitectura IV',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 6
        },
        {
            nombre: 'Administración en Arquitectura I',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Sistemas Estructurales II',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 6
        },
        {
            nombre: 'Sistemas de Instalaciones III',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 6
        },
        {
            nombre: 'Proceso de Diseño Urbano Ambiental II',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 6
        },
        {
            nombre: 'Extensión Universitaria IV',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Curso Optativo I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Curso Optativo II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Taller Integral de Arquitectura V',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 7
        },
        {
            nombre: 'Administración en Arquitectura II',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Sistemas Estructurales III',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 7
        },
        {
            nombre: 'Extensión Universitaria V',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Curso Optativo III',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Curso Optativo IV',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Taller Integral de Arquitectura VI',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 8
        },
        {
            nombre: 'Administración en Arquitectura III',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Curso Optativo V',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Curso Optativo VI',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Titulación I',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 9
        },
        {
            nombre: 'Curso Optativo VII',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Curso Optativo VIII',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Titulación II',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 10
        },
        /*
          ? Las optativas que no tienen semestre definido
          ? que valor tomarán
        */
        {
            nombre: 'Crítica y Reflexión',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Diseño del Hábitar y Medio Ambiente',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Gerencia de Proyectos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Gestión de Proyectos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Gestión en la Producción del Hábitat',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Cultura y Conservación del Patrimonio',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Expresividad Arquitectónica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Estructuras y Técnicas Constructivas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Proceso Proyectal',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
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

    // Licenciatura de Arquitectura de Paisaje
    carrera = new Carrera({
        nombre: 'Licenciatura de Arquitectura de Paisaje',
        categoria: categorias[0]._id,
        semestres: 10,
        sede: sedes[27]._id,
        materias: []
    });
    await carrera.save();

    materias = [
        {
            nombre: 'Teorización del Entorno I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Arqueología del Hábitat I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Expresión Gráfica I',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 1
        },
        {
            nombre: 'Geometría I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Taller Integral I',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 1
        },
        {
            nombre: 'Matemáticas',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Sistemas Ambientales I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Teorización del Entorno II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Arqueología del Hábitat II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Expresión Gráfica II',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 2
        },
        {
            nombre: 'Geometría II',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Taller Integral II',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 2
        },
        {
            nombre: 'Sistemas Estructurales Básicos I',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 2
        },
        {
            nombre: 'Sistemas Ambientales II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Teoría de la Arquitectura de Paisaje I',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 3
        },
        {
            nombre: 'Historia de la Arquitectura de Paisaje I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Medio Biofísico I',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 3
        },
        {
            nombre: 'Botánica',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 3
        },
        {
            nombre: 'Expresión Gráfica III',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 3
        },
        {
            nombre: 'Metodología I',
            carera: carrera._id,
            categoria: categoria_materias[16]._id,
            semestre: 3
        },
        {
            nombre: 'Taller de Proyectos I',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 3
        },
        {
            nombre: 'Construcción I',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 3
        },
        {
            nombre: 'Topografía',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 3
        },
        {
            nombre: 'Sistemas Socioambientales',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Teoría de la Arquitectura de Paisaje II',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 4
        },
        {
            nombre: 'Historia de la Arquitectura de Paisaje II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Medio Biofísico II',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 4
        },
        {
            nombre: 'Ecología',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 4
        },
        {
            nombre: 'Expresión Gráfica IV',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 4
        },
        {
            nombre: 'Metodología II',
            carera: carrera._id,
            categoria: categoria_materias[16]._id,
            semestre: 4
        },
        {
            nombre: 'Taller de Proyectos II',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 4
        },
        {
            nombre: 'Construcción II',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 4
        },
        {
            nombre: 'Sistemas de Información Geográfica',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 4
        },
        {
            nombre: 'Planeación y Paisaje',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 4
        },
        {
            nombre: 'Práctica de Campo I',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 4
        },
        {
            nombre: 'Diseño con Vegetación',
            carera: carrera._id,
            categoria: categoria_materias[16]._id,
            semestre: 5
        },
        {
            nombre: 'Agua en el Paisaje',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Expresión Gráfica V',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 5
        },
        {
            nombre: 'Metodología III',
            carera: carrera._id,
            categoria: categoria_materias[16]._id,
            semestre: 5
        },
        {
            nombre: 'Taller de Proyectos III',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 5
        },
        {
            nombre: 'Instalaciones',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 5
        },
        {
            nombre: 'Administración I',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Paisaje Rural',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Ambiente y Comportamiento Humano',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 5
        },
        {
            nombre: 'Mantenimiento Vegetal',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 6
        },
        {
            nombre: 'Biogeografía',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Expresión Gráfica VI',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 6
        },
        {
            nombre: 'Metodología VI',
            carera: carrera._id,
            categoria: categoria_materias[16]._id,
            semestre: 6
        },
        {
            nombre: 'Taller de Proyectos VI',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 6
        },
        {
            nombre: 'Temas Selectos de Construcción',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 6
        },
        {
            nombre: 'Derecho y Paisajes',
            carera: carrera._id,
            categoria: categoria_materias[17]._id,
            semestre: 6
        },
        {
            nombre: 'Espacios Urbanos',
            carera: carrera._id,
            categoria: categoria_materias[16]._id,
            semestre: 6
        },
        {
            nombre: 'Paisaje Urbano',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 6
        },
        {
            nombre: 'Práctica de Campo II',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 6
        },
        {
            nombre: 'Paisaje y Patrimonio',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 7
        },
        {
            nombre: 'Conservación y Rehabilitación del Paisaje',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 7
        },
        {
            nombre: 'Taller de Proyectos V',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 7
        },
        {
            nombre: 'Gestión de Paisaje',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
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
            nombre: 'Impacto Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 8
        },
        {
            nombre: 'Taller de Proyectos VI',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa III',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
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
            nombre: 'Taller Integral de Titulación I',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa VI',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Taller Integral de Titulación II',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 10
        },
        {
            nombre: 'Optativa VII',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        //? Semestre en optativa
        {
            nombre: 'Área Diseño',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Área Ambiental',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Área Teórico Humanística',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Área Territorio y Sociedad',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Área Tecnología',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
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

    // Licenciatura de Diseño Industrial
    carrera = new Carrera({
        nombre: 'Licenciatura de Diseño Industrial',
        categoria: categorias[0]._id,
        semestres: 10,
        sede: sedes[27]._id,
        materias: []
    });
	
    await carrera.save();

    materias = [
        {
            nombre: 'Taller Integral I',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 1
        },
        {
            nombre: 'Geometría I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Expresión Gráfica I',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 1
        },
        {
            nombre: 'Arqueología del Hábitat I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Teorización del Entorno I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Matemáticas',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Sistemas Ambientales I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Taller Integral II',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 2
        },
        {
            nombre: 'Geometría II',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Expresión Gráfica II',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 2
        },
        {
            nombre: 'Arqueología del Hábitat II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Teorización del Entorno II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Sistemas Estructurales Básicos I',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 2
        },
        {
            nombre: 'Sistemas Ambientales II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Diseño III',
            carera: carrera._id,
            categoria: categoria_materias[16]._id,
            semestre: 3
        },
        {
            nombre: 'Fabricación I',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 3
        },
        {
            nombre: 'Materiales I',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 3
        },
        {
            nombre: 'Formación Integral I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Visualización y Bocetaje de Productos',
            carera: carrera._id,
            categoria: categoria_materias[16]._id,
            semestre: 3
        },
        {
            nombre: 'Modelos I',
            carera: carrera._id,
            categoria: categoria_materias[16]._id,
            semestre: 3
        },
        {
            nombre: 'Geometría del Objeto',
            carera: carrera._id,
            categoria: categoria_materias[16]._id,
            semestre: 3
        },
        {
            nombre: 'Modelo Virtual I',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 3
        },
        {
            nombre: 'Diseño IV',
            carera: carrera._id,
            categoria: categoria_materias[16]._id,
            semestre: 4
        },
        {
            nombre: 'Fabricación II',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 4
        },
        {
            nombre: 'Materiales II',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 4
        },
        {
            nombre: 'Función',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Formación Integral II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Bocetado Digital',
            carera: carrera._id,
            categoria: categoria_materias[16]._id,
            semestre: 4
        },
        {
            nombre: 'Modelos II',
            carera: carrera._id,
            categoria: categoria_materias[16]._id,
            semestre: 4
        },
        {
            nombre: 'Dibujo Técnico',
            carera: carrera._id,
            categoria: categoria_materias[16]._id,
            semestre: 4
        },
        {
            nombre: 'Modelo Virtual II',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 4
        },
        {
            nombre: 'Diseño V',
            carera: carrera._id,
            categoria: categoria_materias[16]._id,
            semestre: 5
        },
        {
            nombre: 'Fabricación III',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 5
        },
        {
            nombre: 'Contexto Socioeconómico del Diseño Industrial',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 5
        },
        {
            nombre: 'Diseño+Utopía',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 5
        },
        {
            nombre: 'Optativa de Saberes de lo Humano y lo Social I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Investigación y Lenguaje Profesional',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 5
        },
        {
            nombre: 'Formación Integral III',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 5
        },
        {
            nombre: 'Optativa de Saberes de Comuniación I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Optativa I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 5
        },
        {
            nombre: 'Diseño VI',
            carera: carrera._id,
            categoria: categoria_materias[16]._id,
            semestre: 6
        },
        {
            nombre: 'Fabricación IV',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa de Saberes de Gestión y Emprendimiento I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Diseño, Contexto y Sostenibilidad',
            carera: carrera._id,
            categoria: categoria_materias[16]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa de Saberes de lo Humano y lo Social II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Formación Integral IV',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Presentación de Proyectos',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa de Saberes de Comuniación II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Optativa II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 6
        },
        {
            nombre: 'Diseño VII (Ergonomía)',
            carera: carrera._id,
            categoria: categoria_materias[16]._id,
            semestre: 7
        },
        {
            nombre: 'Calidad y Normatividad',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa de Saberes de Gestión y Emprendimiento II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Formación Integral V',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa III',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa IV',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Optativa V',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Diseño VIII (Estetica)',
            carera: carrera._id,
            categoria: categoria_materias[16]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa VI',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa VII',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Optativa VIII',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Diseño Temático',
            carera: carrera._id,
            categoria: categoria_materias[16]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa de Saberes de Diseño',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa de Saberes de Gestión y Emprendimiento III',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Optativa IX',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Titulación',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 10
        },
        {
            nombre: 'Optativa X',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
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

    //TODO: Licenciatura de Urbanismo
    // https://arquitectura.unam.mx/plan-de-estudios-urb.html
}

exports.work = carga_carreras_rubenhdez;