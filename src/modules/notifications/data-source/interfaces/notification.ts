import { AtLeastOne } from '@Type/generic';
import { Notification, NotificationFilter } from '@Module/notifications/domain/notification';

export type INotificationDataSource = {
  getById(id: string): Promise<Notification | null>;
  getAll(): Promise<Notification[]>;
  getByQuery(where: NotificationFilter): Promise<Notification[]>;
  updateById(id: string, data: AtLeastOne<Omit<Notification, 'id'>>): Promise<Notification | null>;
  updateMany(
    where: NotificationFilter,
    data: AtLeastOne<Omit<Notification, 'id'>>
  ): Promise<number>;
};
