const mongoose = require('mongoose');
const graphql = require('graphql');
const { 
  GraphQLObjectType,  GraphQLString,  GraphQLID, GraphQLFloat
} = graphql;

const Bug = mongoose.model('categoria_materia');

const BugType = new GraphQLObjectType({
  name:  'BugType',
  fields: () => ({
    id: { type: GraphQLID },
    comentario: { type: GraphQLString },
    estrellas: { type: GraphQLFloat }
  })
});

module.exports = BugType;