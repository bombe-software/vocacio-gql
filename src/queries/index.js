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
const Bug = mongoose.model('bug')


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
      type: require('./sede'),
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { id }) {
        return Sede.findById(id);
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
    carrera2: {
      type: new GraphQLList(require('./carrera')),
      args: {
        id1: { type: new GraphQLNonNull(GraphQLID) },
        id2: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { id1, id2 }) {
        return [Carrera.findById(id1), Carrera.findById(id2)];
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
    bugs: {
      type: new GraphQLList(require('./bug')),
      resolve() {
        return Bug.find({});
      }
    }
  })
});

module.exports = RootQuery;