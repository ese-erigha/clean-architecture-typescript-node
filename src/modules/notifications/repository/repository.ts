import { injectable, inject } from 'inversify';
import { INotificationDataSource } from '@Module/notifications/data-source';
import { INotificationRepository } from '@Module/notifications/repository/interfaces/repository';
import { Notification, NotificationFilter } from '@Module/notifications/domain/notification';
import { AtLeastOne } from '@Type/generic';
import { TYPES } from '@Module/notifications/di/types';

@injectable()
export class NotificationRepository implements INotificationRepository {
  @inject(TYPES.INotificationDataSource)
  private dataSource!: INotificationDataSource;

  getNotificationById(id: string): Promise<Notification | null> {
    return this.dataSource.getById(id);
  }

  getNotifications(): Promise<Notification[]> {
    return this.dataSource.getAll();
  }

  getNotificationsByFilter(where: NotificationFilter): Promise<Notification[]> {
    return this.dataSource.getByQuery(where);
  }

  updateNotificationById(
    id: string,
    data: AtLeastOne<Omit<Notification, 'id'>>
  ): Promise<Notification | null> {
    return this.dataSource.updateById(id, data);
  }

  updateNotifications(
    where: NotificationFilter,
    data: AtLeastOne<Omit<Notification, 'id'>>
  ): Promise<number> {
    return this.dataSource.updateMany(where, data);
  }
}
