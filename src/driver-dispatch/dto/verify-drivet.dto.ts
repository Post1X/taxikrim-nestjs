import { ApiProperty } from "@nestjs/swagger";

export class VerifyDriverDto {
  @ApiProperty()
  code: string;
  @ApiProperty()
  phone: string;
}
