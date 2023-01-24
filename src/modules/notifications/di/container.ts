import { ContainerModule, interfaces } from 'inversify';

import { TYPES } from './types';
import {
  INotificationDataSource,
  MongoNotificationDataSource
} from '@Module/notifications/data-source';
import { NotificationRepository, INotificationRepository } from '@Module/notifications/repository';

import * as INotificationUseCases from '@Module/notifications/use-case/interfaces';
import * as NotificationUseCases from '@Module/notifications/use-case/impl';

const notificationsContainer = new ContainerModule((bind: interfaces.Bind) => {
  bind<INotificationDataSource>(TYPES.INotificationDataSource).to(MongoNotificationDataSource);
  bind<INotificationRepository>(TYPES.INotificationRepository).to(NotificationRepository);
  bind<INotificationUseCases.ICountUnreadNotificationsUseCase>(
    TYPES.ICountUnreadNotificationsUseCase
  ).to(NotificationUseCases.CountUnreadNotificationsUseCase);
  bind<INotificationUseCases.IGetNotificationByIdUseCase>(TYPES.IGetNotificationByIdUseCase).to(
    NotificationUseCases.GetNotificationByIdUseCase
  );
  bind<INotificationUseCases.IGetNotificationsUseCase>(TYPES.IGetNotificationsUseCase).to(
    NotificationUseCases.GetNotificationsUseCase
  );
  bind<INotificationUseCases.IGetUnreadNotificationsUseCase>(
    TYPES.IGetUnreadNotificationsUseCase
  ).to(NotificationUseCases.GetUnreadNotificationsUseCase);
  bind<INotificationUseCases.IReadAllUnreadNotificationsUseCase>(
    TYPES.IReadAllUnreadNotificationsUseCase
  ).to(NotificationUseCases.ReadAllUnreadNotificationsUsecase);
  bind<INotificationUseCases.IReadNotificationByIdUseCase>(TYPES.IReadNotificationByIdUseCase).to(
    NotificationUseCases.ReadNotificationByIdUseCase
  );
});

export { notificationsContainer };
