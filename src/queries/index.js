const mongoose = require('mongoose');
const graphql = require('graphql');
const { 
  GraphQLObjectType, GraphQLList, GraphQLID, 
  GraphQLNonNull, GraphQLString 
} = graphql;

//Importar models
const Sede = mongoose.model('sede');
const Carrera = mongoose.model('carrera');
const Materia = mongoose.model('materia');
const Universidad = mongoose.model('universidad');


const RootQuery = new GraphQLObjectType({
  name: 'Consultas',
  fields: () => ({
    sedes: {
      type: new GraphQLList(require('./sede')),
      resolve() {
        return Sede.find({});
      }
    },
    sede: {
      type: new GraphQLList(require('./sede')),
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { id }) {
        return Sede.find(id);
      }
    },
    carreras: {
      type: new GraphQLList(require('./carrera')),
      resolve() {
        return Carrera.find({});
      }
    },
    carrera: {
      type: require('./carrera'),
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { id }) {
        return Carrera.findById(id);
      }
    },
    materias: {
      type: new GraphQLList(require('./materia')),
      resolve() {
        return Materia.find({});
      }
    },
    materia: {
      type: require('./materia'),
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { id }) {
        return Materia.findById(id);
      }
    },
    universidades: {
      type: new GraphQLList(require('./universidad')),
      resolve() {
        return Universidad.find({});
      }
    },
    universidad: {
      type: require('./universidad'),
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { id }) {
        return Universidad.findById(id);
      }
    },
  })
});

module.exports = RootQuery;