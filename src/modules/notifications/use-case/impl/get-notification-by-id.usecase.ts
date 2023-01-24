import { injectable, inject } from 'inversify';

import { INotificationRepository } from '@Module/notifications/repository';
import { IGetNotificationByIdUseCase } from '@Module/notifications/use-case/interfaces';
import { Notification } from '@Module/notifications/domain';
import { TYPES } from '@Module/notifications/di/types';

@injectable()
export class GetNotificationByIdUseCase implements IGetNotificationByIdUseCase {
  @inject(TYPES.INotificationRepository)
  private repository!: INotificationRepository;

  execute(id: string): Promise<Notification | null> {
    return this.repository.getNotificationById(id);
  }
}
