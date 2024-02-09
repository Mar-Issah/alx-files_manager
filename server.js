import express from 'express';
import startServer from './libs/boot';
import injectRoutes from './routes';
import injectMiddlewares from './libs/middlewares';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();
const server = express();
const port = process.env.PORT || 5000;

// injectMiddlewares(server);
// Middleware to parse JSON bodies
server.use(express.json({ limit: '200mb' }));

injectRoutes(server);

// startServer(server);
// const startServer = (api) => {
//   envLoader();
//   const port = process.env.PORT || 5000;
//   const env = process.env.NPM_LIFECYCLE_EVENT || 'dev';
//   api.listen(port, () => {
//     console.log(`[${env}] API has started listening at port:${port}`);
//   });
// };
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default server;
