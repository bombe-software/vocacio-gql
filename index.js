const api = require('./config/config').api;
const web = require('./config/config').web;
const ws = require('./config/config').ws;
const status = require('./config/config').status;
const MONGO_URI = require('./config/config').MONGO_URI;

//Librerias de express
const express = require('express');
const bodyParser = require('body-parser');
const createServer = require('http').createServer;
const app = express();
const port = process.env.PORT || 9000;

//Librerias de la base de datos
const mongoose = require('mongoose');
const models = require('./models');

//Librerias de autenticacion
const cors = require('cors');

//Librerias de graphql
const expressGraphQL = require('express-graphql');
const SubscriptionServer = require('subscriptions-transport-ws').SubscriptionServer;
const execute = require('graphql').execute;
const subscribe = require('graphql').subscribe;
const PubSub = require('graphql-subscriptions').PubSub;

//Importar schemas
const schema = require('./src');
mongoose.Promise = require('bluebird');
mongoose.connect(MONGO_URI, { useNewUrlParser: true }).catch(err => console.error(err));

const corsOptions = {
  origin: web,
  credentials: true,
}
app.use(cors(corsOptions));


//Integracion de graphql
app.use('/graphql', bodyParser.json(),  
expressGraphQL({
  schema,
  graphiql: !status
}));

//Area de pruebas
app.get('/registro', function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  require('./registro').registro(req, res);
  res.end();
});


//Configuracion 
const server = createServer(app);
server.listen(port, () => {
  new SubscriptionServer({
    execute,
    subscribe,
    schema: schema,
  }, {
    server: server,
    path: '/subscriptions',
  });
  console.log(`${api}`); 
  console.log(`${ws}/subscriptions`); 
});