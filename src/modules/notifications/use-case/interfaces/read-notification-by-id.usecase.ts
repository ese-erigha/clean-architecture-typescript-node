import { Notification } from '@Module/notifications/domain';

export type IReadNotificationByIdUseCase = {
  execute(id: string): Promise<Notification | null>;
};
