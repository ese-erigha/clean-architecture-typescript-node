import { Schema, model, Types, Document } from 'mongoose';

import { config } from '@Config/index';

export type INotification = {
  message: string;
  read: boolean;
};

export type NotificationEntity = Document<unknown, unknown, INotification> &
  INotification & {
    _id: Types.ObjectId;
  };

const NotificationSchema = new Schema<INotification>({
  message: {
    type: String,
    required: true
  },
  read: {
    type: Boolean
  }
});

export const NotificationModel = model<INotification>(
  config.NOTIFICATION_TABLE,
  NotificationSchema
);
