import { Request, Response, NextFunction } from 'express';

import { ApiError } from '@Shared/utils/error';
import { logger } from '@Shared/utils/logger';

export const handleErrors = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  const data = {
    status: 'error',
    message: err.message
  };

  let statusCode = 500;
  if (err instanceof ApiError) {
    statusCode = err.getCode();
  }
  logger.error(`${req.url} - ${statusCode} - ${err.message}`);
  return res.status(statusCode).json(data);
};
