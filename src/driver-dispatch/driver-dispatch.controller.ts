import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Request,
  Delete,
  UseInterceptors,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { DriverDispatchService } from './driver-dispatch.service';
import { CreateDriverDispatchDto } from './dto/create-driver-dispatch.dto';
import { UpdateDriverDispatchDto } from './dto/update-driver-dispatch.dto';
import { AuthGuard } from '../auth/auth.guard';
import { CallDriverDto } from './dto/call-driver.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { VerifyDriverDto } from './dto/verify-drivet.dto';

@Controller('users/drivers')
export class DriverDispatchController {
  constructor(private readonly driverDispatchService: DriverDispatchService) {}

  @Post('/make-call')
  async call(@Body() callDriverDto: CallDriverDto) {
    return this.driverDispatchService.call(callDriverDto);
  }

  @Post('/verify')
  async confirmNumber(@Body() verifyDriverDto: VerifyDriverDto) {
    return this.driverDispatchService.verifyNumber(verifyDriverDto);
  }

  @Post('/image')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './public/images',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file) {
    return `localhost:3000/${file.filename}`;
  }

  @Post('/verification')
  @UseGuards(AuthGuard)
  async verificationData(
    @Body() createDriverDispatchDto: CreateDriverDispatchDto,
    @Request() req,
  ) {
    return await this.driverDispatchService.verificationData(
      createDriverDispatchDto,
      await req.user,
    );
  }

  @Get('/status')
  @UseGuards(AuthGuard)
  async getStatus(@Request() req) {
    return await this.driverDispatchService.getStatus(await req.user);
  }
}
