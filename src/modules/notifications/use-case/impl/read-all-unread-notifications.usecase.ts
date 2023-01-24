import { injectable, inject } from 'inversify';
import { INotificationRepository } from '@Module/notifications/repository';
import { IReadAllUnreadNotificationsUseCase } from '@Module/notifications/use-case/interfaces';
import { TYPES } from '@Module/notifications/di/types';

@injectable()
export class ReadAllUnreadNotificationsUsecase implements IReadAllUnreadNotificationsUseCase {
  @inject(TYPES.INotificationRepository)
  private repository!: INotificationRepository;

  execute(): Promise<number> {
    return this.repository.updateNotifications({ read: false }, { read: true });
  }
}
