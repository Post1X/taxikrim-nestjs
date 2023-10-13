import { Injectable } from '@nestjs/common';
import { CreateDriverDispatchDto } from './dto/create-driver-dispatch.dto';
import { CallDriverDto } from './dto/call-driver.dto';
import makeCall from '../utilities/makeCall';
import generateFourRandomNumbers from '../utilities/generateRandomNumbers';
import { AuthService } from '../auth/auth.service';
import { InjectModel } from '@nestjs/mongoose';
import {
  DriverDispatchDocument,
  DriverDispatches,
} from './schemas/driver-dispatch.schema';
import { Model } from 'mongoose';

@Injectable()
export class DriverDispatchService {
  constructor(
    @InjectModel(DriverDispatches.name)
    private driver_dispatchModel: Model<DriverDispatchDocument>,
    private readonly authService: AuthService,
  ) {}

  async call(callDriverDto: CallDriverDto) {
    const code = generateFourRandomNumbers();
    const newDriveDisp = new this.driver_dispatchModel({
      phone: callDriverDto.phone,
      code: code,
    });
    makeCall(callDriverDto.phone, code).then(() =>
      console.log('Звонок сделан'),
    );
    await newDriveDisp.save();
  }

  //
  async verifyNumber(verifyDriverDto) {
    const client = await this.driver_dispatchModel.findOne({
      phone: verifyDriverDto.phone,
    });
    if (client && client.code === verifyDriverDto.code) {
      await this.driver_dispatchModel.findOneAndUpdate(
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

  //
  async verificationData(
    createDriverDispatchDto: CreateDriverDispatchDto,
    req,
  ) {
    try {
      await this.driver_dispatchModel.findOneAndUpdate(
        {
          _id: req.user_id,
        },
        { ...createDriverDispatchDto, statusId: '651c58343139415dbd440b71' },
      );
      return {
        message: 'success',
      };
    } catch (e) {
      return e;
    }
  }

  //
  async getStatus(req) {
    console.log(req.user_id);
    return this.driver_dispatchModel
      .findOne({
        _id: req.user_id,
      })
      .populate('statusId')
      .select('statusId');
  }
  //
}
