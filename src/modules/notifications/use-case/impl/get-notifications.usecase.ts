import { injectable, inject } from 'inversify';
import { INotificationRepository } from '@Module/notifications/repository';
import { IGetNotificationsUseCase } from '@Module/notifications/use-case/interfaces';
import { Notification } from '@Module/notifications/domain';
import { TYPES } from '@Module/notifications/di/types';

@injectable()
export class GetNotificationsUseCase implements IGetNotificationsUseCase {
  @inject(TYPES.INotificationRepository)
  private repository!: INotificationRepository;

  execute(): Promise<Notification[]> {
    return this.repository.getNotifications();
  }
}
