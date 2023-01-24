import { Request, Response, NextFunction } from 'express';

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];

type ExpressRouteFunction = (
  req: Request<never>,
  res: Response,
  next: NextFunction
) => void | Promise<void>;

export type IdParam = {
  id: string;
};
