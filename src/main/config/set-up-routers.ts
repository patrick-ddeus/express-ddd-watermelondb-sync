import { Express, Router } from 'express';
import fs from 'fs';
import path from 'path';

export default function (app: Express) {
  const router = Router();
  const routersDir = path.resolve(__dirname, '../routers');

  const incomingRouters = fs.readdirSync(routersDir);

  incomingRouters.forEach((file) => {
    if (!file.endsWith('.js') && !file.endsWith('.ts')) return;

    const route = require(path.join(routersDir, file));
    if (typeof route.default === 'function') {
      route.default(router);
    }
  });

  app.use('/api', router);
}
