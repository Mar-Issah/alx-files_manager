import express from 'express';
import startServer from './libs/boot';
import injectRoutes from './routes';

const server = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
server.use(express.json({ limit: '200mb' }));

injectRoutes(server);

startServer(server);

export default server;
