import { z } from 'zod';
import * as ZodHelpers from '@Shared/utils/zod';

const configSchema = z.object({
  MONGO_HOST: z.string().min(1),
  PORT: ZodHelpers.optionalNumber,
  DATABASE: z.string().min(1),
  NOTIFICATION_TABLE: z.string().min(1),
  NODE_ENV: z.string().optional().default('development')
});

export type Config = z.infer<typeof configSchema>;

export const config = configSchema.parse(process.env);
