import express from 'express';

import { container } from '@DI/index';
import { TYPES } from '@Module/notifications/di';
import * as controller from '@Module/notifications/infra/http/controller';
import {
  ICountUnreadNotificationsUseCase,
  IGetNotificationByIdUseCase,
  IGetNotificationsUseCase,
  IGetUnreadNotificationsUseCase,
  IReadAllUnreadNotificationsUseCase,
  IReadNotificationByIdUseCase
} from '@Module/notifications/use-case/interfaces';

const getNotificationsUseCase = container.get<IGetNotificationsUseCase>(
  TYPES.IGetNotificationsUseCase
);
const getUnreadNotificationsUseCase = container.get<IGetUnreadNotificationsUseCase>(
  TYPES.IGetUnreadNotificationsUseCase
);
const countUnreadNotificationsUseCase = container.get<ICountUnreadNotificationsUseCase>(
  TYPES.ICountUnreadNotificationsUseCase
);
const readAllUnreadNotificationsUseCase = container.get<IReadAllUnreadNotificationsUseCase>(
  TYPES.IReadAllUnreadNotificationsUseCase
);
const readNotificationByIdUseCase = container.get<IReadNotificationByIdUseCase>(
  TYPES.IReadNotificationByIdUseCase
);
const getNotificationByIdUseCase = container.get<IGetNotificationByIdUseCase>(
  TYPES.IGetNotificationByIdUseCase
);

const notificationsRouter = express.Router();

notificationsRouter.get('/', controller.findAllNotifications(getNotificationsUseCase));
notificationsRouter.get(
  '/unread',
  controller.findAllUnreadNotifications(getUnreadNotificationsUseCase)
);
notificationsRouter.get(
  '/unread/count',
  controller.countAllUnreadNotifications(countUnreadNotificationsUseCase)
);
notificationsRouter.put(
  '/read/all',
  controller.readAllUnreadNotifications(readAllUnreadNotificationsUseCase)
);
notificationsRouter.put('/read/:id', controller.readNotificationById(readNotificationByIdUseCase));
notificationsRouter.get('/:id', controller.findNotificationById(getNotificationByIdUseCase));

export { notificationsRouter };
