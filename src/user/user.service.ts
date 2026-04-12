import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { createUserDto } from './dto/createUser.dto';
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel) {}
  async create(userData: createUserDto) {
    const newUser = new this.userModel(userData);
    return await newUser.save();
  }
  async findOne(username: string, password: string) {
    return await this.userModel.findOne({ username, password });
  }
}
