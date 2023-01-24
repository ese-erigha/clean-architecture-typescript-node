import { Notification, NotificationFilter } from '@Module/notifications/domain/notification';
import { AtLeastOne } from '@Type/generic';
export type INotificationRepository = {
  getNotificationById(id: string): Promise<Notification | null>;
  getNotifications(): Promise<Notification[]>;
  getNotificationsByFilter(where: NotificationFilter): Promise<Notification[]>;
  updateNotificationById(
    id: string,
    data: AtLeastOne<Omit<Notification, 'id'>>
  ): Promise<Notification | null>;
  updateNotifications(
    where: NotificationFilter,
    data: AtLeastOne<Omit<Notification, 'id'>>
  ): Promise<number>;
};
