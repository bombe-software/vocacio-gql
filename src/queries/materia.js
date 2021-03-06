const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType, GraphQLString,
  GraphQLID, GraphQLInt
} = graphql;

const Materia = mongoose.model('materia');

const MateriaType = new GraphQLObjectType({
  name: 'MateriaType',
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString },
    carrera: {
      type: require('./carrera'),
      resolve(parentValue) {
        return Materia.findById(parentValue.id).populate('carrera')
          .then(materia => materia.carrera);
      }
    },
    categoria: {
      type: require('./categoria_materia'),
      resolve(parentValue) {
        return Materia.findById(parentValue.id).populate('categoria')
          .then(materia => materia.categoria);
      }
    },
    semestre: { type: GraphQLInt },
  })
});

module.exports = MateriaType;