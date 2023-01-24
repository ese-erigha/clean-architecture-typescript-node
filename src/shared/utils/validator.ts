import { Types } from 'mongoose';

import { BadRequestException } from './error';

export const validateMongooseId = (id: string) => {
  if (!Types.ObjectId.isValid(id)) throw new BadRequestException(`Invalid Id - ${id}`);
};
