//Llamada de modelos
const mongoose = require('mongoose');
const async = require('async');
const Sede = mongoose.model('sede');
const Carrera = mongoose.model('carrera');

async function carga_relaciones() {

    Carrera.find({}, null, null, (err, carreras) => {
        carreras.forEach(o =>{
            Sede.findById(o.sede, (err, e)=>{
                let carreras = e.carreras;
                carreras.push(o._id);
                e.save();
            })
        })
    })
    console.log("Acabo proceso asincrono[1]")
}

exports.work = carga_relaciones;