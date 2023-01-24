import morgan from 'morgan';
import { logger } from '@Shared/utils/logger';

const stream = {
  // Use the http severity
  write: (message: unknown) => logger.http(message)
};

const skip = () => {
  const env = process.env.NODE_ENV || 'development';
  return env !== 'development';
};

export const morganMiddleware = morgan(
  // Define message format string (this is the default one).
  // The message format is made from tokens, and each token is
  // defined inside the Morgan library.
  ':remote-addr :method :url :status :res[content-length] - :response-time ms',
  { stream, skip }
);
