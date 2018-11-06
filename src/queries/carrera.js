const mongoose = require('mongoose');
const graphql = require('graphql');
const {
    GraphQLObjectType,  GraphQLString,  
    GraphQLID, GraphQLInt, GraphQLList 
} = graphql;

const Carrera = mongoose.model('carrera');

const CarreraType = new GraphQLObjectType({
  name:  'CarreraType',
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString },
    categoria: {
        type: require('./categoria'),
        resolve(parentValue) {
          return Carrera.findById(parentValue.id).populate('categoria')
            .then(carrera => carrera.categoria);
        }
    },
    semestres: { type: GraphQLInt },
    sede: {
        type: require('./sede'),
        resolve(parentValue) {
          return Carrera.findById(parentValue.id).populate('sede')
            .then(carrera => carrera.sede);
        }
    },
    materias: {
        type: GraphQLList(require('./materia')),
        resolve(parentValue) {
          return Carrera.findById(parentValue).populate('materias')
              .then(carrera => carrera.materias);
        }
    }
  })
});

module.exports = CarreraType;