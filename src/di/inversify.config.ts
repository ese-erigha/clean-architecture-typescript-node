import { Container } from 'inversify';

import { notificationsContainer } from '@Module/notifications/di';

const container = new Container();
container.load(notificationsContainer);

export { container };
