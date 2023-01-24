import { injectable, inject } from 'inversify';
import { INotificationRepository } from '@Module/notifications/repository';
import { IGetUnreadNotificationsUseCase } from '@Module/notifications/use-case/interfaces';
import { Notification } from '@Module/notifications/domain';
import { TYPES } from '@Module/notifications/di/types';

@injectable()
export class GetUnreadNotificationsUseCase implements IGetUnreadNotificationsUseCase {
  @inject(TYPES.INotificationRepository)
  private repository!: INotificationRepository;

  execute(): Promise<Notification[]> {
    return this.repository.getNotificationsByFilter({ read: false });
  }
}
