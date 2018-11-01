const graphql = require('graphql');
const { GraphQLObjectType,  GraphQLString,  GraphQLID } = graphql;

const CampusType = new GraphQLObjectType({
  name:  'CampusType',
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString },
    categoria: { type: GraphQLString },
    posicion: { type: GraphQLString },
    universidad: { type: GraphQLString },
    carreras: { type: GraphQLString }
  })
});

module.exports = CampusType;