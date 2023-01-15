/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { UserModel } from '../model/user.model';
import * as bcrypt from 'bcrypt';
import { ConflictException, UnauthorizedException } from '@nestjs/common/exceptions';
import { CredentialsDTO } from '../dto/credentialsDTO';

@Injectable()
export class AuthServiceService {

  constructor(
    @InjectRepository(UserModel)
    private userRepository: Repository<UserModel>,
  ) { }

  async get(): Promise<UserModel[]> {
    return await this.userRepository.find();
  }

  async addUser(user: UserModel): Promise<UserModel> {
    const salt = await bcrypt.genSalt();
    const newPassword = await bcrypt.hash(user.password, salt);
    user.password = newPassword;
    try {
      await this.userRepository.save(user);
    } catch (error) {
      throw new ConflictException("Some error happened while adding user");
    }
    return user;
  }

  async loginUser(userCredentials: CredentialsDTO): Promise<UserModel> {
    const user = await this.userRepository.findOneBy({ email: userCredentials.email });
    try {
      if (user.password === userCredentials.password) {
        console.log(user);
        return user;
      }
      else {
        throw new UnauthorizedException('Wrong password');
      }
    } catch (error) {
      throw new Error("Some error happened while logging in");
    }
  }
} 