/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { UserModel } from '../model/user.model';

@Injectable()
export class AuthServiceService {
  constructor(
    @InjectRepository(UserModel)
    private userRepository: Repository<UserModel>,
  ) { }
  get(): void {
    console.log('Hello World');
  }
  async addUser(user: UserModel): Promise<UserModel> {
    return await this.userRepository.save(user);
  }
}
