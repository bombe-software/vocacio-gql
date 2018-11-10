const mongoose = require('mongoose');
const graphql = require('graphql');
const { 
  GraphQLObjectType,  GraphQLString,  GraphQLID
} = graphql;

const CategoriaMateria = mongoose.model('categoria_materia');

const CategoriaMateriaType = new GraphQLObjectType({
  name:  'CategoriaMateriaType',
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString }
  })
});

module.exports = CategoriaMateriaType;