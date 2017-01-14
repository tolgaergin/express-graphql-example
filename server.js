import express from 'express';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';

// Routers
import route from './routes/route';

// Graphql schema
import schema from './graphql';

// Public static files
const staticAssets = __dirname + '/public';
const templatesPath = __dirname + '/templates';

const app = express();

app
  .set('views', templatesPath)
  .set('view engine', 'hjs')
  .use('/graphql', graphqlHTTP(req => ({
    schema,
    pretty: true,
    graphiql: true,
  })))
  .use(express.static(staticAssets))
  .use(route);

const server = app.listen(3000);
