const mongoose = require('mongoose');
const Universidad = mongoose.model('universidad');
const Sede = mongoose.model('sede');
const Carrera = mongoose.model('carrera');
const Materia = mongoose.model('materia');


function universidades(req, res) {
    const universidades = [
        {
            nombre: "IPN",
            logo: "IPN.jpg"
        },
        {
            unam: "UNAM",
            logo: "UNAM.jpg"
        }
    ]
    universidades.map(item => {
        const universidad = new Universidad(item);
        universidad.save()
            .then(item => {
                console.log(item);
            });
    });
    res.write("Universidades");
};

function sedes(req, res) {
    const sedes = [
        //Sedes IPN: ID_FAKE_IPN
        {
            nombre: 'UPIITA',
            logo: 'IPN.png',
            categoria: 'Interdisciplinaria',
            posicion: '19.820845, -99.203562',
            universidad:'ID_FAKE_IPN'
        },
        //Sedes UNAM: ID_FAKE_UNAM
        {
            nombre: 'Facultad de Ciencias',
            logo: 'IPN.png',
            categoria: 'Matematicas',
            posicion: '19.820845, -99.203562',
            universidad:'ID_FAKE_UNAM'
        },
    ]
    sedes.map(item => {
        const sede = new Sede(item);
        sede.save()
            .then(item => {
                console.log(item);
            });
    });
    res.write("sedes");
};

exports.registro = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    //Metodos
    universidades(req, res);
    campus(req, res);

    res.end();
};