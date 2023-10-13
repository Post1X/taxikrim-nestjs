import { ApiProperty } from '@nestjs/swagger';

export class UpdateClientDto {
  @ApiProperty()
  readonly full_name: string;
  @ApiProperty()
  readonly img: string;
}
