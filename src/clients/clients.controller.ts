import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  Param,
  Delete,
  Put,
  HttpStatus,
  HttpCode,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CallClientDto } from './dto/call-client.dto';
import { VerifyClientDto } from './dto/verify-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import generateFourRandomNumbers from '../utilities/generateRandomNumbers';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('users/clients')
export class ClientsController {
  constructor(
    private readonly clientsService: ClientsService,
    private readonly authService: AuthService,
  ) {}
  @Post('/make-call')
  call(@Body() callClientDto: CallClientDto) {
    const code = generateFourRandomNumbers();
    console.log(code);
    return this.clientsService.call(+code, callClientDto);
  }

  @Post('/verify')
  confirmNumber(@Body() verifyClientDto: VerifyClientDto) {
    return this.clientsService.confirmNumber(verifyClientDto);
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
  @Get('')
  @UseGuards(AuthGuard)
  async findOne(@Request() req) {
    return await this.clientsService.findOne(await req.user);
  }

  @Put('/update/')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  async update(@Request() req, @Body() updateClientDto: UpdateClientDto) {
    return await this.clientsService.update(await req.user, updateClientDto);
  }
  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.clientsService.remove(+id);
  }
}
