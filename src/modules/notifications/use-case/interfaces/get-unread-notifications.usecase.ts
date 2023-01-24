import { Notification } from '@Module/notifications/domain';

export type IGetUnreadNotificationsUseCase = {
  execute(): Promise<Notification[]>;
};
