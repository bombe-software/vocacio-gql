//Configuracion de GraphQL
const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLInt, GraphQLFloat } = graphql;

//Funciones add
const { add_bug } = require('./bug');

const RootMutation = new GraphQLObjectType({
  name: 'Mutaciones',
  fields: {
    test: {
      type: GraphQLString,
      args: {
        comentario: { type: GraphQLString }, 
        estrellas: { type: GraphQLFloat }
      },
      resolve(parentValue, args, req) {
        return add_bug({ args, req });
      }
    }
  }
});

module.exports = RootMutation;