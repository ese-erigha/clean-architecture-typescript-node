export type ICountUnreadNotificationsUseCase = {
  execute(): Promise<number>;
};
