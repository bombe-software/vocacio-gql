function registro(){
    const mongoose = require('mongoose');

    const Materia = mongoose.model('materia');

    var materia = new Materia({
        nombre:  String
    });
    materia.save();
};
  
exports.pruebas = function (req, res) {
      registro();
};