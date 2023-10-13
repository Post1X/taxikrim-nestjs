import { ApiProperty } from "@nestjs/swagger";

export class CreateDriverDispatchDto {
  @ApiProperty()
  readonly frontPassport: string;
  @ApiProperty()
  readonly backPassport: string;
  @ApiProperty()
  readonly phone: string;
  @ApiProperty()
  readonly firstName: string;
  @ApiProperty()
  readonly lastName: string;
  @ApiProperty()
  readonly middleName: string;
  @ApiProperty()
  readonly firstCarPhoto: string;
  @ApiProperty()
  readonly secondCarPhoto: string;
  @ApiProperty()
  readonly thirdCarPhoto: string;
  @ApiProperty()
  readonly fourthCarPhoto: string;
  @ApiProperty()
  readonly publicNumber: string;
  @ApiProperty()
  readonly carBrandId: string;
  @ApiProperty()
  readonly carColor: string;
  @ApiProperty()
  readonly carModel: string;
  @ApiProperty()
  readonly tariffId: string;
}
