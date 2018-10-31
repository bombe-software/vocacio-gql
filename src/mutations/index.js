//Configuracion de GraphQL
const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLInt } = graphql;

//Funciones add
const { test } = require('./test');

const RootMutation = new GraphQLObjectType({
  name: 'Mutaciones',
  fields: {
    test: {
      type: GraphQLString,
      args: {
        texto: { type: GraphQLString }
      },
      resolve(parentValue, args, req) {
        return test({ args, req });
      }
    }
  }
});

module.exports = RootMutation;