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
    categoria: { type: GraphQLString },
    semestres: { type: GraphQLString },
    campus: {
        type: require('./sede'),
        resolve(parentValue) {
          return Carrera.findById(parentValue.id).populate('campus')
            .then(carrera => carrera.campus);
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