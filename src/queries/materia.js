const mongoose = require('mongoose');
const graphql = require('graphql');
const { 
    GraphQLObjectType,  GraphQLString, 
    GraphQLID, GraphQLInt
} = graphql;

const Materia = mongoose.model('materia');

const MateriaType = new GraphQLObjectType({
  name:  'MateriaType',
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString },
    carera: { type: GraphQLString },
    categoria: { type: GraphQLString },
    semestre: { type: GraphQLInt },
  })
});

module.exports = MateriaType;