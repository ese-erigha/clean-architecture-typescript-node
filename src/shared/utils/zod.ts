import { z } from 'zod';

export const number = z.preprocess((v) => Number.parseInt(v as string, 10), z.number());

export const optionalNumber = number.optional();
