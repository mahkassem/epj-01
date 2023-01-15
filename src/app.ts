import express from 'express';
import appLogger from './utils/middlewares/appLogger';
import { config } from './config';
import cors from 'cors';
import helmet from 'helmet';
import { json } from 'body-parser';
import logger from './utils/logger';
import router from './routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(appLogger);
app.use(json());

app.get('/favicon.ico', (_req, res) => res.status(204));

app.use(router);

app.listen(config.app.port, () => {
  logger.info(`App Environment: ${config.app.environment}`);
  logger.info(`App running on http://localhost:${config.app.port}`);
});

export default app;
