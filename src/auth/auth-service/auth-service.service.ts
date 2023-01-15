/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { UserModel } from '../model/user.model';
import * as bcrypt from 'bcrypt';
import { ConflictException, NotFoundException } from '@nestjs/common/exceptions';
import { CredentialsDTO } from '../dto/credentialsDTO';
import { UserModelDTO } from '../dto/userModelDTO';


@Injectable()
export class AuthServiceService {
  constructor(
    @InjectRepository(UserModel)
    private userRepository: Repository<UserModel>,
  ) {
  }

  async get(): Promise<UserModel[]> {
    return await this.userRepository.find();
  }

  async addUser(user: UserModelDTO): Promise<UserModel> {
    const salt = bcrypt.genSaltSync();
    const newPassword = await bcrypt.hash(user.password, salt);
    user.password = newPassword;
    user.salt = salt;
    try {
      return await this.userRepository.save(user);
    } catch (error) {
      throw new ConflictException("Some error happened while adding user");
    }

  }

  async loginUser(userCredentials: CredentialsDTO): Promise<UserModel> {
    const { email, password } = userCredentials;
    const user = await this.userRepository.createQueryBuilder("users")
      .where("users.email = :email", { email })
      .getOne();
    if (!user) {
      throw new NotFoundException("email is incorrect");
    }
    const hashedPassword = await bcrypt.hash(password, user.salt);
    if (hashedPassword === user.password) {
      return user;
    }
    else {
      throw new NotFoundException("password is incorrect");
    }
  }
}