import './config/index';

import express from 'express';
import setExpressMiddlewares from './config/setup-express-middlewares';
import { AppDataSource } from '../infra/database/datasource';
import setUpRouters from './config/set-up-routers';

export default async () => {
  const app = express();

  await AppDataSource.initialize();
  setExpressMiddlewares(app);
  setUpRouters(app)

  return app;
};
