//Llamada de modelos
const mongoose = require('mongoose');
const async = require('async');
const Universidad = mongoose.model('universidad');
const Sede = mongoose.model('sede');
const Carrera = mongoose.model('carrera');
const Materia = mongoose.model('materia');
const Categoria = mongoose.model('categoria');


async function carga_carreras_vicroni(categorias, categoria_materias, sedes){
    let carrera = new Carrera({
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
        categoria: categoria_materias[0]._id,
        semestre: 1
        },
        {
            nombre: 'Algebra lineal y numeros complejos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Mecanica de la particula',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Introduccion a la mecatronica',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 1
        },
        {
            nombre: 'Estructura y propiedades de los materiales',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Herramientas computacionales',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 1
        },
        {
            nombre: 'Introduccion a la programacion',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Dibujo asistido por computadora',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 1
        },
        {
            nombre: 'Ecuaciones diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Calculo vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Mecanica del cuerpo rigido',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Comunicacion oral y escrita',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Circuitos electricos',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 2
        },
        {
            nombre: 'Procesos de manufactura',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 2
        },
        {
            nombre: 'Analisis y diseño de programas',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 2
        },
        {
            nombre: 'Electricidad y magnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Circuitos electricos avanzados',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 3
        },
        {
            nombre: 'Fundamentos de electronica',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 3
        },
        {
            nombre: 'Ingles I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Mantenimiento y desarrollo de sistemas',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 3
        },
        {
            nombre: 'Analisis y sintesis de mecanismos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Analisis de señales y sistemas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Analisis de señales y sistemas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Resitencia de materiales',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ingles II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Termodinamica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Probabilidad y estadistica para ingenieria',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Electronica analogica',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 4
        },
        {
            nombre: 'Simulacion electronica y diseño de circuitos impresos',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 4
        },
        {
            nombre: 'Oscilaciones y optica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Programacion avanzada',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 4
        },
        {
            nombre: 'Mecanica de los fluidos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Teoría electromagnetica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Diseño basico de elementos de maquinas',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 5
        },
        {
            nombre: 'Administracion organizacional',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 5
        },
        {
            nombre: 'Microcontroladores, microprocesadores e interfaz',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Circuitos logicos',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Modelado y simulacion de sistemas mecatronicos',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 5
        },
        {
            nombre: 'Etica para el ejercicio profesional',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 5
        },
        {
            nombre: 'Electronica de potencia',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Sensores y acondicionadores de señales',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Neumatica e hidraulica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Dispositivos logicos progrmables',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Ingles III',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Maquinas electricas',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Instrumentacion virtual',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 6
        },
        {
            nombre: 'Control clasico',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Finanzas e ingenieria economica',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 6
        },
        {
            nombre: 'Diseño avanzado de elementos de maquinas',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 6
        },
        {
            nombre: 'Sistemas neurodifusos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 7
        },
        {
            nombre: 'Liderazgo y emprendedores',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Proyecto integrador',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Procesador digital de señales',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 7
        },
        {
            nombre: 'Ingenieria asitida por computadora',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 7
        },
        {
            nombre: 'Control de maquins electricas',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Automatizacion industrial',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Ingenieria ambiental',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 8
        },
        {
            nombre: 'Proyectos de inversion',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 8
        },
        {
            nombre: 'Metodologia de investigacion',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 8
        },
        {
            nombre: 'Sistemas de vision artificial',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 8
        },
        {
            nombre: 'Control de sistemas mecatronicos',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 8
        },
        {
            nombre: 'Servicio social',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 9
        },
        {
            nombre: 'Trabajo terminal 1',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 9
        },
        {
            nombre: 'Trabajo terminal 2',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 10
        },
        {
            nombre: 'Automatas industriales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Protocolos avanzados de telecomunicaciones',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Control distribuido',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Seguridad industrial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Sistemas de calidad para la maunfactura',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Desarollo empresarial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Economia y logistica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Topicos avanzados de sensores',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Produccion más limpia',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Uso y mantenimiento de herramiental para procesos de manufactura',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Diseño avanzado y manufactura asistida por computadora',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Graficacion en 3D',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Procesos industriales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Sistemas operativos en tiempo real',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Topicos avanzados de elctronica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Microcontroladores avanzados',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Realidad virtual',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Control inteligente',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Protocolos de comunicacion industrial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Control de sistemas roboticos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Instrumentacion virtual aplicada',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Diseño ergonomico',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Procesos avanzados de manufactura',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Manufactura integrada por computadora',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Sistemas de procesamiento digital de señales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Control de procesos indutriales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Integracion de un sistema robotico',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Implementacion de sistemas digitales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Proyecto de sistemas embebidos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Topicos avanzados de soldaura',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Sistemas avanzados de manufactura',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Mercadotecnia',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
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
        categoria: categoria_materias[0]._id,
        semestre: 1
        },
        {
            nombre: 'Algebra lineal',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Administracion de sistemas operativos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Analisis y diseño de sistemas',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Comunicacion oral y escrita',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Programacion estructurada',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Ecuaciones diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Calculo multivariable',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Programacion',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Administracion organizacional',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Ingles I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Fundamentos de fisica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Etica profesion y sociedad',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Desarollo sustentable',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Variable compleja',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Probabilidad',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Ingles II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Estructuras de datos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 3
        },
        {
            nombre: 'Señales y sistemas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Teoria de los circuitos',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 3
        },
        {
            nombre: 'Información financiera e ingenieria economica',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Metodos numericos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Economia para ingenieros',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Diseño digital',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 4
        },
        {
            nombre: 'Electromagnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ingles III',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Base de datos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 4
        },
        {
            nombre: 'Electronica',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 4
        },
        {
            nombre: 'Teoria de las telecomunicaciones',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Electronica para las telecomunicaciones',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Optica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ingles IV',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Arquitectura de computadoras',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Procesamiento digital de señales',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Ingenieria Web',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 5
        },
        {
            nombre: 'Propagacion de ondas electromagneticas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Comunicaciones digitales',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Transmision de datos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 5
        },
        {
            nombre: 'Telefonia',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 6
        },
        {
            nombre: 'Protocolos de internet',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 6
        },
        {
            nombre: 'Teoria de la información',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 6
        },
        {
            nombre: 'Lineas de transmision y antenas',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Administracion de proyectos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Dispositivos progrmables',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Dispositivos programables',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Sistemas celulares',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 7
        },
        {
            nombre: 'Sistemas distribuidos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 7
        },
        {
            nombre: 'Liderazgo y emprendedores',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Bases de datos distribuidas',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 7
        },
        {
            nombre: 'Redes inteligentes',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 7
        },
        {
            nombre: 'Multimedia',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 7
        },
        {
            nombre: 'Redes de telecomunicaciones',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Seguridad en redes',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 8
        },
        {
            nombre: 'Metodologia de la investigacion',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 8
        },
        {
            nombre: 'Aplicaciones distribuidas',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 8
        },
        {
            nombre: 'Servicio social',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 8
        },
        {
            nombre: 'Proyecto terminal I ',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 9
        },
        {
            nombre: 'Proyecto terminal II',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 10
        },
        {
            nombre: 'Progrmacion de dispositivos moviles',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 8
        },
        {
            nombre: 'Redes inalambricas',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 8
        },
        {
            nombre: 'Redes neuronales',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 8
        },
        {
            nombre: 'Logica difusa',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 8
        },
        {
            nombre: 'Sistemas de informacion geografica',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 8
        },
        {
            nombre: 'Normatividad en telecomunicaciones e informatica',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 8
        },
        {
            nombre: 'Television digital',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 9
        },
        {
            nombre: 'Sistemas de calidad',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 9
        },
        {
            nombre: 'Filtrado avanzado',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 9
        },
        {
            nombre: 'Criptografia',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 9
        },
        {
            nombre: 'Microondas',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 9
        },
        {
            nombre: 'Procesamiento de imagenes',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 9
        },
        {
            nombre: 'Procesamiento de voz',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
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

exports.work = carga_carreras_vicroni;