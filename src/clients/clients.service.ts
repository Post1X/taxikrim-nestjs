import { Injectable } from '@nestjs/common';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Clients, ClientsDocument } from './schemas/client.schema';
import { Model } from 'mongoose';
import { CallClientDto } from './dto/call-client.dto';
import { VerifyClientDto } from './dto/verify-client.dto';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Clients.name) private clientModel: Model<ClientsDocument>,
    private readonly authService: AuthService,
  ) {}

  async call(code, callClientDto: CallClientDto) {
    // makeCall(callClientDto.phone, code).then(() => {
    //   console.log('Звонок сделан');
    // });
    const newClient = new this.clientModel({
      phone: callClientDto.phone,
      code: code,
    });
    await newClient.save();
    return newClient;
  }

  async confirmNumber(verifyClientDto: VerifyClientDto) {
    const client = await this.clientModel.findOne({
      phone: verifyClientDto.phone,
    });
    if (client && client.code === verifyClientDto.code) {
      await this.clientModel.findOneAndUpdate(
        {
          _id: client._id,
        },
        {
          code: null,
        },
      );
      const token = await this.authService.createToken({
        user_id: client._id,
        phone: client.phone,
      });
      return {
        token,
      };
    } else {
      return {
        error: 'Код неверный',
      };
    }
  }

  async findOne(req) {
    return this.clientModel.findOne({
      _id: req.user_id,
    });
  }

  async update(req, updateClientDto: UpdateClientDto) {
    await this.clientModel.findOneAndUpdate(
      { _id: req.user_id },
      {
        full_name: updateClientDto.full_name,
        image: updateClientDto.img,
      },
    );
    return {
      message: 'success',
    };
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
