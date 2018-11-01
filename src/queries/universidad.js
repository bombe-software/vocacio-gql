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
    logo: { type: GraphQLString },
    campus: {
        type: GraphQLList(require('./sede')),
        resolve(parentValue) {
          return Universidad.findById(parentValue).populate('campus')
              .then(universidad => universidad.campus);
        }
      }
  })
});

module.exports = UniversidadType;