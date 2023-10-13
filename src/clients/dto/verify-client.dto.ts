import { ApiProperty } from '@nestjs/swagger';

export class VerifyClientDto {
  @ApiProperty()
  readonly phone: string;
  @ApiProperty()
  readonly code: string;
}
