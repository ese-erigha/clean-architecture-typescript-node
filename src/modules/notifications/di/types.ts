export const TYPES = {
  INotificationDataSource: Symbol.for('INotificationDataSource'),
  INotificationRepository: Symbol.for('INotificationRepository'),

  ICountUnreadNotificationsUseCase: Symbol.for('ICountUnreadNotificationsUseCase'),
  IGetNotificationByIdUseCase: Symbol.for('IGetNotificationByIdUseCase'),
  IGetNotificationsUseCase: Symbol.for('IGetNotificationsUseCase'),
  IGetUnreadNotificationsUseCase: Symbol.for('IGetUnreadNotificationsUseCase'),
  IReadAllUnreadNotificationsUseCase: Symbol.for('IReadAllUnreadNotificationsUseCase'),
  IReadNotificationByIdUseCase: Symbol.for('IReadNotificationByIdUseCase')
};
