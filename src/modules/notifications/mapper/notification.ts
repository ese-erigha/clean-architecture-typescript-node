/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NotificationEntity } from '@Module/notifications/data-source/mongodb/model/notification';
import { Notification } from '@Module/notifications/domain/notification';
export class NotificationMap {
  public static fromEntityToDomain(entity: NotificationEntity): Notification {
    const { _id, message, read } = entity.toObject();
    return {
      id: _id.toString(),
      message,
      read
    };
  }
}
