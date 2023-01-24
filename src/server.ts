import 'reflect-metadata';
import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

import { logger } from '@Shared/utils/logger';
import { config } from '@Config/index';
import app from '@Infra/index';

const port = config.PORT || 3000;

(async function start() {
  app.listen(port, async () => {
    try {
      mongoose.set('strictQuery', true);
      await mongoose.connect(config.MONGO_HOST, { dbName: config.DATABASE });
      logger.info(`Example app listening on port ${port}`);
    } catch (error) {
      logger.error('There was an error - ', error);
      process.exit(1);
    }
  });
})();
