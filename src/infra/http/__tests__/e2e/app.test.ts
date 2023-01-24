import mongoose from 'mongoose';
import request from 'supertest';

import { config } from '@Config/index';
import app from '@Infra/index';

describe('API', () => {
  const baseUrl = '/api/v1/notifications';
  beforeEach(async () => {
    try {
      mongoose.set('strictQuery', true);
      await mongoose.connect(config.MONGO_HOST, { dbName: config.DATABASE });
    } catch (err) {
      console.log(err);
    }
  });

  test('GET /api/v1/notifications/ - should return list of notifications', async () => {
    const res = await request(app).get(`${baseUrl}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('success');
    expect(res.body.data.notifications.length).toBeGreaterThan(0);
  });

  afterEach(async () => {
    await mongoose.connection.close();
  });
});
