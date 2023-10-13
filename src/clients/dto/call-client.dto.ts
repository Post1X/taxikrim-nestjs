import { ApiProperty } from "@nestjs/swagger";

export class CallClientDto {
  @ApiProperty()
  readonly phone: string;
}
