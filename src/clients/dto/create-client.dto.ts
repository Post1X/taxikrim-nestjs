import { ApiProperty } from "@nestjs/swagger";

export class CreateClientDto {
  @ApiProperty()
  readonly full_name: string;
  @ApiProperty()
  readonly phone_number: string;
  @ApiProperty()
  readonly img: string;
}
