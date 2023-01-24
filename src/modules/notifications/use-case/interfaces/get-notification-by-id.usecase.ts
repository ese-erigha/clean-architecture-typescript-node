import { Notification } from '@Module/notifications/domain';

export type IGetNotificationByIdUseCase = {
  execute(id: string): Promise<Notification | null>;
};
