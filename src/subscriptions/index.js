//Configuracion de GraphQL
const graphql = require('graphql');
const { GraphQLObjectType } = graphql;
const pubsub = require('./../../config/pubsub').pubsub;

//Tipos de chemas
const { 
  GraphQLString 
} = graphql;
// const SolicitudEventoType = require('./../schemas/solicitud_evento');


//Contantes de las suscripciones
const {
    PRUEBA
} = require('./constantes');


const { resolver_generico } = require('./resolver_generico');

const RootSubscription = new GraphQLObjectType({
  name: 'Suscripciones',
  fields: {
    //Funciones add
    prueba: {
      type: GraphQLString,
      subscribe: () => pubsub.asyncIterator(EVENTO_ADD),
      resolve: (payload, args, context, info) => {
        return resolver_generico(payload, args, context, info);
      }
    }
  }
});

module.exports = RootSubscription;