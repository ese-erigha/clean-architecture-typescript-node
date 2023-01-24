import { injectable } from 'inversify';

import { INotificationDataSource } from '@Module/notifications/data-source/interfaces/notification';
import { Notification, NotificationFilter } from '@Module/notifications/domain';
import { NotificationModel } from '@Module/notifications/data-source/mongodb/model/notification';
import { NotificationMap } from '@Module/notifications/mapper/notification';
import { validateMongooseId } from '@Shared/utils/validator';
import { AtLeastOne } from '@Type/generic';

@injectable()
export class MongoNotificationDataSource implements INotificationDataSource {
  async getById(id: string): Promise<Notification | null> {
    validateMongooseId(id);
    const notification = await NotificationModel.findById(id);
    if (notification) return NotificationMap.fromEntityToDomain(notification);
    return notification;
  }
  async getAll(): Promise<Notification[]> {
    const notifications = await NotificationModel.find({});
    return notifications.map((notification) => NotificationMap.fromEntityToDomain(notification));
  }
  async getByQuery(where: NotificationFilter): Promise<Notification[]> {
    const notifications = await NotificationModel.find(where);
    return notifications.map((notification) => NotificationMap.fromEntityToDomain(notification));
  }
  async updateById(
    id: string,
    data: AtLeastOne<Omit<Notification, 'id'>>
  ): Promise<Notification | null> {
    validateMongooseId(id);
    const notification = await NotificationModel.findByIdAndUpdate(id, data, {
      returnDocument: 'after'
    });
    if (notification) return NotificationMap.fromEntityToDomain(notification);
    return notification;
  }
  async updateMany(
    where: NotificationFilter,
    data: AtLeastOne<Omit<Notification, 'id'>>
  ): Promise<number> {
    const result = await NotificationModel.updateMany(where, data);
    return result.modifiedCount;
  }
}
