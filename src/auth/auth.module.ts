/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AuthControllerController } from './auth-controller/auth-controller.controller';
import { AuthServiceService } from './auth-service/auth-service.service';
import { UserModel } from './model/user.model';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [UserModel]
    ),
  ],
  controllers: [AuthControllerController],
  providers: [AuthServiceService],
})
// eslint-disable-next-line prettier/prettier
export class AuthModule { }
