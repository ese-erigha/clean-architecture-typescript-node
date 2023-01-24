import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import helmet from 'helmet';

import { morganMiddleware } from '@Infra/http/middlewares/morgan';
import { handleErrors } from '@Infra/http/middlewares/errorHandler';
import Routes from '@Infra/http/api/v1';
import { config } from '@Config/index';
import swaggerDocument from './swagger.json';

const app = express();

app.use(morganMiddleware);
app.use(helmet());

app.get('/ping', (_req: Request, res: Response) =>
  res.json({
    name: 'clean-architecture',
    environment: config.NODE_ENV
  })
);

app.use('/api/v1', Routes);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(handleErrors);

export default app;
