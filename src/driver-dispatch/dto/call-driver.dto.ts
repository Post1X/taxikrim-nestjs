import { ApiProperty } from "@nestjs/swagger";

export class CallDriverDto {
  @ApiProperty()
  readonly phone: string;
}
