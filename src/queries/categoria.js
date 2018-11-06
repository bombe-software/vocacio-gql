const mongoose = require('mongoose');
const graphql = require('graphql');
const { 
  GraphQLObjectType,  GraphQLString,  GraphQLID
} = graphql;

const Categoria = mongoose.model('categoria');

const CategoriaType = new GraphQLObjectType({
  name:  'CategoriaType',
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString }
  })
});

module.exports = CategoriaType;