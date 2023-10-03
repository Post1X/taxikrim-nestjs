import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverDispatchDto } from './create-driver-dispatch.dto';

export class UpdateDriverDispatchDto extends PartialType(
  CreateDriverDispatchDto,
) {}
