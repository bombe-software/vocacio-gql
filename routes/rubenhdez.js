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
}

exports.work = carga_carreras_rubenhdez;