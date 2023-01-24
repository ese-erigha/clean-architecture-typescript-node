import { injectable, inject } from 'inversify';

import { INotificationRepository } from '@Module/notifications/repository';
import { ICountUnreadNotificationsUseCase } from '@Module/notifications/use-case/interfaces';
import { TYPES } from '@Module/notifications/di/types';

@injectable()
export class CountUnreadNotificationsUseCase implements ICountUnreadNotificationsUseCase {
  @inject(TYPES.INotificationRepository)
  private repository!: INotificationRepository;

  async execute(): Promise<number> {
    const notifications = await this.repository.getNotificationsByFilter({
      read: false
    });
    return notifications.length;
  }
}
