import { AtLeastOne } from '@Type/generic';

export type Notification = {
  id: string;
  message: string;
  read: boolean;
};

export type NotificationFilter = AtLeastOne<Omit<Notification, 'id'>>;
