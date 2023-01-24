import express from 'express';

import { notificationsRouter } from '@Module/notifications';

const api = express.Router();

api.use('/notifications', notificationsRouter);

export default api;
