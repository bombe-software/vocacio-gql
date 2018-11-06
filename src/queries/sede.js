const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList
} = graphql;

const Sede = mongoose.model('sede');

const SedeType = new GraphQLObjectType({
  name: 'SedeType',
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString },
    abreviatura: { type: GraphQLString },
    logo: { type: GraphQLString },
    categoria: {
      type: require('./categoria'),
      resolve(parentValue) {
        return Sede.findById(parentValue.id).populate('categoria')
          .then(sede => sede.categoria);
      }
    },
    posicion: { type: GraphQLString },
    universidad: {
      type: require('./universidad'),
      resolve(parentValue) {
        return Sede.findById(parentValue.id).populate('universidad')
          .then(sede => sede.universidad);
      }
    },
    carreras: {
      type: GraphQLList(require('./carrera')),
      resolve(parentValue) {
        return Sede.findById(parentValue).populate('carreras')
          .then(sede => sede.carreras);
      }
    }
  })
});

module.exports = SedeType;