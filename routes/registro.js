const mongoose = require('mongoose');
const Sede = mongoose.model('sede');
const Carrera = mongoose.model('carrera');
const Materia = mongoose.model('materia');
const Universidad = mongoose.model('universidad');

function universidades(req, res){
    const universidades = [{
        nombre: "IPN",
        logo: ""
    }]
    universidades.map(item =>{
        const universidad = new Universidad(item); 
        universidad.save()
        .then(item =>{
            console.log(item);
        });
    });
    res.write("Universidades");
};
  
exports.registro = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    //Metodos
    universidades(req, res);


    res.end();
};