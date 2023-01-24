import { Notification } from '@Module/notifications/domain';

export type IGetNotificationsUseCase = {
  execute(): Promise<Notification[]>;
};
