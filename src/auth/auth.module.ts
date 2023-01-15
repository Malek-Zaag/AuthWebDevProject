import { Module } from '@nestjs/common';
import { AuthControllerController } from './auth-controller/auth-controller.controller';
import { AuthServiceService } from './auth-service/auth-service.service';

@Module({
  controllers: [AuthControllerController],
  providers: [AuthServiceService],
})
// eslint-disable-next-line prettier/prettier
export class AuthModule { }
