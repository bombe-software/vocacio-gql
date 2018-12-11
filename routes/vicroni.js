//Llamada de modelos
const mongoose = require('mongoose');
const async = require('async');
const Universidad = mongoose.model('universidad');
const Sede = mongoose.model('sede');
const Carrera = mongoose.model('carrera');
const Materia = mongoose.model('materia');
const Categoria = mongoose.model('categoria');


async function carga_carreras_vicroni(categorias, categoria_materias, sedes) {
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
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Redes inalambricas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Redes neuronales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Logica difusa',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Sistemas de informacion geografica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Normatividad en telecomunicaciones e informatica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Television digital',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Sistemas de calidad',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Filtrado avanzado',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Criptografia',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Microondas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Procesamiento de imagenes',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Procesamiento de voz',
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
        nombre: 'Ingeniería Bionica',
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
            nombre: 'Biologia celular',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 1
        },
        {
            nombre: 'Quimica organica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Metrologia',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 1
        },
        {
            nombre: 'Programacion estructurada',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Bioetica',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Herramientas computacionales',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 2
        },
        {
            nombre: 'Calculo vectorial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Anatomia',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 2
        },
        {
            nombre: 'Fundamentos de fisica para ingenieria',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Ingles I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Biologia molecular',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 2
        },
        {
            nombre: 'Ecuaciones diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Programacion orientada a objetos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 3
        },
        {
            nombre: 'Fundamentos de teoria electromagnetica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Desarrollo sostenible',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Fisicoquimica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 3
        },
        {
            nombre: 'Fisiologia',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 3
        },
        {
            nombre: 'Teoria de los circuitos',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 3
        },
        {
            nombre: 'Ingles II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Analisis numericos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Bioestadistica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Bioqumica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 4
        },
        {
            nombre: 'Fundamentos matematicos de ingenieria',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Ondas electromageticas y sistemas radiantes',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Sistemas de gestion de calidad',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 4
        },
        {
            nombre: 'Dispositivos electronicos',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 4
        },
        {
            nombre: 'Ingles III',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Biognosis',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 5
        },
        {
            nombre: 'Fisica moderna y optica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Electronica analogica y de potencia',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Electronica digital',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Sensores y actuadores',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Biomagnetismo',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 5
        },
        {
            nombre: 'Mecanismos biomimeticos',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 5
        },
        {
            nombre: 'Biofisica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 6
        },
        {
            nombre: 'Liderazgo y emprendedores',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Biomateriales',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 6
        },
        {
            nombre: 'Teoria del control',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Procesamiento de imagenes',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 6
        },
        {
            nombre: 'Dispositivos programables',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 6
        },
        {
            nombre: 'Analisis de esfuerzos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Investigacion y desarrollo de proyectos',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Control neurodifuso',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 7
        },
        {
            nombre: 'Procesamiento de señales biologicas',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 7
        },
        {
            nombre: 'Bioinstrumentacion',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 7
        },
        {
            nombre: 'Modelado y control de sistemas bionicos',
            carera: carrera._id,
            categoria: categoria_materias[4]._id,
            semestre: 7
        },
        {
            nombre: 'Manufactura de elementos biomimeticos',
            carera: carrera._id,
            categoria: categoria_materias[10]._id,
            semestre: 7
        },
        {
            nombre: 'Reconocimiento de patrones',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 7
        },
        {
            nombre: 'Normatividad y gestion tecnologica',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 8
        },
        {
            nombre: 'Metodologia de la investigacion',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 8
        },
        {
            nombre: 'Biomecanica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Bioelectronica',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 8
        },
        {
            nombre: 'Biorobotica',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 9
        },
        {
            nombre: 'Servicio social',
            carera: carrera._id,
            categoria: categoria_materias[11]._id,
            semestre: 9
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
            nombre: 'Simulacion de analisis de esfuerzos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Instrumentacion clinica y de laboratorio',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Vision artificial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Ergonomia y biodinamica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Instrumentacion biomedica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Inteligencia artificial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Protesis biomimeticas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Robotica evolutiva y autonoma',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Control de sistemas biologicos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Comunicacion oral y escrita',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Ingenieria del control humano',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Sistemas biomecanicos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Biosensores y biochips',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Instrumentacion biotecnologica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Telemetria medica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Imagenologia',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Neuro/Robotica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Sistemas sensoriales',
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
        nombre: 'Ingeniería Civil',
        categoria: categorias[0]._id,
        semestres: 10,
        sede: sedes[4]._id,
        materias: []
    });
    await carrera.save();
    materias = [
        {
            nombre: 'Expresion grafica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Fisica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Geologia',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 1
        },
        {
            nombre: 'Herramientas computacionales',
            carera: carrera._id,
            categoria: categoria_materias[7]._id,
            semestre: 1
        },
        {
            nombre: 'Matematicas I',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Relaciones humanas',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Dinamica de la particula',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Matematicas II',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Programacion',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 2
        },
        {
            nombre: 'Quimica basica y aplicada',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 2
        },
        {
            nombre: 'Sociologia',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Transporte e ingenieria de transito',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Economia',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Estatica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Expresion grafica II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Ingenieria sanitaria y ambiental',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Matematicas III',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Topografia',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 3
        },
        {
            nombre: 'Estructuras isotaticas',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 4
        },
        {
            nombre: 'Geomatica',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 4
        },
        {
            nombre: 'Hidraulica basica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Matematicas IV',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Mecanica de suelos I',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 4
        },
        {
            nombre: 'Procedimientos constructivos I',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 4
        },
        {
            nombre: 'Matematicas V',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Mecanica de los suelos II',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Movimiento de la tierra',
            carera: carrera._id,
            categoria: categoria_materias[12]._id,
            semestre: 5
        },
        {
            nombre: 'Residuos solidos urbanos',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 5
        },
        {
            nombre: 'Resistencia de materiales',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Tuberias y canales',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 5
        },
        {
            nombre: 'Caminos y ferrrocarriles',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 6
        },
        {
            nombre: 'Estructura y desarrollo de Mexico',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Estructura de mamposteria',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 6
        },
        {
            nombre: 'Hidrologia',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Ingenieria de sistemas I',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Mecanica de suelos III',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 6
        },
        {
            nombre: 'Agua potable',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Analisis estructural',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 7
        },
        {
            nombre: 'Modelos estocasticos',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 7
        },
        {
            nombre: 'Obras hidraulicas de captacion superficial',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 7
        },
        {
            nombre: 'Pavimentos y terracerias',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 7
        },
        {
            nombre: 'Procedimientos constructivos II',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 7
        },
        {
            nombre: 'Procedimientos constructivos II',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 7
        },
        {
            nombre: 'Administracion',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Alcantarillado',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 8
        },
        {
            nombre: 'Estructuras de concreto',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 8
        },
        {
            nombre: 'Mecanica de rocas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Puentes',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 8
        },
        {
            nombre: 'Zonas de riesgo y drenaje',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 8
        },
        {
            nombre: 'Aeropuertos',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 9
        },
        {
            nombre: 'Estructuras de acero',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 9
        },
        {
            nombre: 'Instalaciones hidraulicas y sanitarias',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 9
        },
        {
            nombre: 'Metodologia de la investigacion',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 9
        },
        {
            nombre: 'Planeacion',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Hidraulica maritima',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 9
        },
        {
            nombre: 'Obras de infraestructura',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 9
        },
        {
            nombre: 'Obras de infraestructura',
            carera: carrera._id,
            categoria: categoria_materias[13]._id,
            semestre: 9
        },
        {
            nombre: 'Formulacion de proyectos de inversion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Desarrollo de aplicaciones informaticas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Ingenieria sismica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Aprovecahmientos hidraulicos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Hidraulica fluvial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Calidad del agua y contaminacion de cuerpos de agua',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Proyecto y construccion de sistemas de agua potable',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Diseño contrucccion y monitoreo de un relleno sanitario',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Cimentaciones',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Drenaje y paisajes',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Planificacion urbana',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Normatividad de la obra publica y licitaciones',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Control de calidad de materiales naturales y artificiales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Administracion de obras civiles',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Sistemas de informacion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Diseño de cimentaciones',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Manejo integral de cuencas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Hidroinformatica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Hidraulica experimental',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Fundamentos de potabilizacion y tratamiento de agua',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Proyecto y construccion de sistemas de alcantarillado',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Geologia aplicada',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Terracerias',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Ingenieria de transito',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Desarrollo integral de la ingenieria I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Control de calidad ISO en ingenieria civil',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Evaluacion de proyectos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Concreto presforzado',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Estructuras especiales de acero',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Estructuras especiales de concreto',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Generacion de energia',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Modernizacion de zonas de riesgo',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Ingenieria de costas',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Modernizacion de plantas de tratamiento',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Modernizacion de plantas potabilizadoras',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Operacion, mantenimiento y administracion de servicios municipales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Taller de geotecnia',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Tecnicas de drenaje',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Proyectos de caminos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Ingenieria de transporte',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Proyecto de puentes',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Proyecto de aeropuertos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Desarrollo integral de la ingenieria II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
        },
        {
            nombre: 'Control de calidad en procesos construtivos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 10
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
        nombre: 'Ingeniería en Computación',
        categoria: categorias[0]._id,
        semestres: 8,
        sede: sedes[7]._id,
        materias: []
    });
    await carrera.save(); 
    materias = [ 
        {
            nombre: 'Fundamentos de programacion',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Calculo diferencial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de algebra',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Fisica clasica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Quimica basica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Humanidades I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Algebra lineal',
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
            nombre: 'Electricidad y magnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Matematicas discretas',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Programacion orientada a objetos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 2
        },
        {
            nombre: 'Humanidades II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Humanidades II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Ecuaciones diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Circuitos de corriente alterna y corriente directa',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 3
        },
        {
            nombre: 'Circuitos logicos I',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 3
        },
        {
            nombre: 'Lenguajes de bajo nivel',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 3
        },
        {
            nombre: 'Estructura de datos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 3
        },
        {
            nombre: 'Humanidades III',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 3
        },
        {
            nombre: 'Analisis numerico',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Variable compleja y analisis de fourier',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Circuitos logicos II',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 4
        },
        {
            nombre: 'Electronica analogica',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 4
        },
        {
            nombre: 'Teoria de automatas',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 4
        },
        {
            nombre: 'Humaidades IV',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Analisis de algoritmos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 5
        },
        {
            nombre: 'Analisis y señales analogicas',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Compiladores',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Organizacion de computadoras',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 5
        },
        {
            nombre: 'Probabilidad y estadistica',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 5
        },
        {
            nombre: 'Humanidades V',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 5
        },
        {
            nombre: 'Arquitectura de computadoras',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Ingenieria de software',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 6
        },
        {
            nombre: 'Metodologia de la investigacion',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 6
        },
        {
            nombre: 'Modulacion digital',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 6
        },
        {
            nombre: 'Sistemas operativos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 6
        },
        {
            nombre: 'Teoria de control analogico',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Teoria de la informacion y codificacion',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 7
        },
        {
            nombre: 'Teoria de control digital',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Bases de datos',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Nuevas tecnologias de la informacion',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 7
        },
        {
            nombre: 'Administracion de la ingenieria',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Proyecto de ingenieria',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Formulacion y evaluacion de proyectos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Redes de computadoras',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 8
        },
        {
            nombre: 'Sistemas distribuidos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 8
        },
        {
            nombre: 'Algoritmos de computo',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Computo aplicado a sistemas ecologicos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Interfaces inteligentes',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Transferencia y procesamiento de la informacion',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Sistemas de informacion I',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 7
        },
        {
            nombre: 'Algoritmos de computo II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Computo aplicado a sistemas ecologicos II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Interfaces inteligentes II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Transferencia y procesamiento de la informacion II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Sistemas de informacion II',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Redes neuronales',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Inteligencia artificial',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Programacion logica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Diseño asistido por computadora',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Lenguajes para arquitectura en paralelo',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Sistemas expertos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
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
        nombre: 'Comunicaciones y electronica',
        categoria: categorias[0]._id,
        semestres: 8,
        sede: sedes[7]._id,
        materias: []
    });
    await carrera.save(); 
    materias = [ 
        {
            nombre: 'Fundamentos de programacion',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 1
        },
        {
            nombre: 'Calculo diferencial',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Fundamentos de algebra',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 1
        },
        {
            nombre: 'Fisica clasica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 1
        },
        {
            nombre: 'Quimica basica',
            carera: carrera._id,
            categoria: categoria_materias[2]._id,
            semestre: 1
        },
        {
            nombre: 'Humanidades I',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 1
        },
        {
            nombre: 'Algebra lineal',
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
            nombre: 'Ecuaciones diferenciales',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Electricidad y magnetismo',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 2
        },
        {
            nombre: 'Quimica aplicada',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 2
        },
        {
            nombre: 'Programacion orientada a objetos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 2
        },
        {
            nombre: 'Humanidades II',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 2
        },
        {
            nombre: 'Variable compleja',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Transformadas de funciones',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 3
        },
        {
            nombre: 'Ondas mecanicas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Circuitos de corriente directa y corriente alterna',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 3
        },
        {
            nombre: 'Campos y ondas electromagneticas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 3
        },
        {
            nombre: 'Estructuras y bases de datos',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 3
        },
        {
            nombre: 'Probabilidad y estadistica',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Mediciones',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Economia',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 4
        },
        {
            nombre: 'Mecanica cuantica y mecanica estadistica',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Ondas electromagneticas guiadas',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 4
        },
        {
            nombre: 'Analisis numerico',
            carera: carrera._id,
            categoria: categoria_materias[0]._id,
            semestre: 4
        },
        {
            nombre: 'Electronica lineal',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Electronica digital',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Analisis de transitorios',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Teora de radiadores electromagneticos',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 5
        },
        {
            nombre: 'Fundamentos de maquinas electricas',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 5
        },
        {
            nombre: 'Electronica lineal',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Electronica digital',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Comunicaciones digitales',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Señales y vibraciones',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 6
        },
        {
            nombre: 'Señales y sistemas de control clasico',
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
            nombre: 'Humanidades III',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 7
        },
        {
            nombre: 'Generacion y evaluacion de proyectos',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 7
        },
        {
            nombre: 'Microcontroladores',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Procesamiento digital de señales',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Electroacustica y transductores',
            carera: carrera._id,
            categoria: categoria_materias[5]._id,
            semestre: 7
        },
        {
            nombre: 'Espacio de estado',
            carera: carrera._id,
            categoria: categoria_materias[1]._id,
            semestre: 8
        },
        {
            nombre: 'Redes basicas',
            carera: carrera._id,
            categoria: categoria_materias[6]._id,
            semestre: 8
        },
        {
            nombre: 'Humanidades IV',
            carera: carrera._id,
            categoria: categoria_materias[3]._id,
            semestre: 8
        },
        {
            nombre: 'Calidad en la ingenieria',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 8
        },
        {
            nombre: 'Desarrollo Prospectivo de Proyectos o Tópicos selectos de Ingeniería',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Humanidades V',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Proyecto de ingenieria',
            carera: carrera._id,
            categoria: categoria_materias[8]._id,
            semestre: 9
        },
        {
            nombre: 'Acústica Arquitectural',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
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
            nombre: 'Comunicaciones por medio de Fibra óptica',
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
            nombre: 'Redes de Área Amplia',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Teoría de Codificación y Mnajeo de Información',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 8
        },
        {
            nombre: 'Control Analógico:Servomecanismos',
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
            nombre: 'Electrónica de Potencia I',
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
            nombre: 'Instrumentación I',
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
            nombre: 'Acústica Musical',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Bioacústica',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Reconocimiento y sístesis de voz',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Ruido y Vibraciones',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Ruido y Vibraciones',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Agentes Inteligentes Externos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Aplicaciones de Redes de Computadoras',
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
            nombre: 'Diseño y Administración de Redes',
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
            nombre: 'Sistemas de Radiocomunicaciones',
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
            nombre: 'Sistema de Adquisición de Datos',
            carera: carrera._id,
            categoria: categoria_materias[9]._id,
            semestre: 9
        },
        {
            nombre: 'Sistemas no Lineales',
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
        nombre: 'Mecanica',
        categoria: categorias[0]._id,
        semestres: 8,
        sede: sedes[7]._id,
        materias: []
    });
    await carrera.save(); 
    materias = [ 
        {
            nombre: 'Televisión y Video',
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
}

exports.work = carga_carreras_vicroni;