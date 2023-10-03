import { Body, Controller, Get, Post } from "@nestjs/common";
import { CarbrandsService } from './carbrands.service';

@Controller('cars')
export class CarbrandsController {
  constructor(
    private readonly carbrandsService: CarbrandsService,
  ) {}
  @Post('')
  async getCars(@Body() body: { title: string }) {
    return await this.carbrandsService.getCars(body.title);
  }
  //
}
