import { Request, Response, NextFunction } from 'express';

import JsendMapper from '@Shared/utils/jsend';
import { NotFoundException } from '@Shared/utils/error';
import { ExpressRouteFunction, IdParam } from '@Type/generic';
import {
  IReadAllUnreadNotificationsUseCase,
  ICountUnreadNotificationsUseCase,
  IGetNotificationByIdUseCase,
  IGetNotificationsUseCase,
  IGetUnreadNotificationsUseCase,
  IReadNotificationByIdUseCase
} from '@Module/notifications/use-case/interfaces';

export function findAllNotifications(useCase: IGetNotificationsUseCase): ExpressRouteFunction {
  return async function (_req: Request, res: Response, next: NextFunction) {
    try {
      const notifications = await useCase.execute();
      res.json(JsendMapper.success({ notifications }));
    } catch (err) {
      next(err);
    }
  };
}

export function findAllUnreadNotifications(
  useCase: IGetUnreadNotificationsUseCase
): ExpressRouteFunction {
  return async function (_req: Request, res: Response, next: NextFunction) {
    try {
      const notifications = await useCase.execute();
      res.json(JsendMapper.success({ notifications }));
    } catch (err) {
      next(err);
    }
  };
}

export function findNotificationById(useCase: IGetNotificationByIdUseCase): ExpressRouteFunction {
  return async function (req: Request<IdParam>, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const notification = await useCase.execute(id);
      if (!notification) throw new NotFoundException(`Notification not found - ${id}`);
      res.json(JsendMapper.success({ notification }));
    } catch (err) {
      next(err);
    }
  };
}

export function countAllUnreadNotifications(
  useCase: ICountUnreadNotificationsUseCase
): ExpressRouteFunction {
  return async function (_req: Request, res: Response, next: NextFunction) {
    try {
      const count = await useCase.execute();
      res.json(JsendMapper.success({ count }));
    } catch (err) {
      next(err);
    }
  };
}

export function readAllUnreadNotifications(
  useCase: IReadAllUnreadNotificationsUseCase
): ExpressRouteFunction {
  return async function (_req: Request, res: Response, next: NextFunction) {
    try {
      const count = await useCase.execute();
      res.json(JsendMapper.success({ count }));
    } catch (err) {
      next(err);
    }
  };
}

export function readNotificationById(useCase: IReadNotificationByIdUseCase): ExpressRouteFunction {
  return async function (req: Request<IdParam>, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const notification = await useCase.execute(id);
      if (!notification) throw new NotFoundException(`Notification not found - ${id}`);
      res.json(JsendMapper.success({ notification }));
    } catch (err) {
      next(err);
    }
  };
}
