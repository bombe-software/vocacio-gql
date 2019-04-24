const mongoose = require('mongoose');
const graphql = require('graphql');
const { 
  GraphQLObjectType,  GraphQLString,  
  GraphQLID, GraphQLList 
} = graphql;

const Universidad = mongoose.model('universidad');

const UniversidadType = new GraphQLObjectType({
  name:  'UniversidadType',
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString },
    abreviatura: { type: GraphQLString },
    logo: { type: GraphQLString },
    sede: {
        type: GraphQLList(require('./sede')),
        resolve(parentValue) {
          return Universidad.findById(parentValue).populate('sedes')
              .then(universidad => universidad.sedes);
        }
      }
  })
});

module.exports = UniversidadType;