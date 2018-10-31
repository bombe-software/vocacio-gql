const mongoose = require('mongoose');
const graphql = require('graphql');
const { 
  GraphQLObjectType, GraphQLList, GraphQLID, 
  GraphQLNonNull, GraphQLString 
} = graphql;

//Importar models
//const Bug = mongoose.model('bug');


const RootQuery = new GraphQLObjectType({
  name: 'Consultas',
  fields: () => ({
    bugs: {
      type: GraphQLString,
      resolve() {
        return "Texto";
      }
    }
  })
});

module.exports = RootQuery;