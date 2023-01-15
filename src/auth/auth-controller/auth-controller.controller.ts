/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { Body, Get, Post } from '@nestjs/common/decorators';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AuthServiceService } from '../auth-service/auth-service.service';
import { CredentialsDTO } from '../dto/credentialsDTO';
import { UserModelDTO } from '../dto/userModelDTO';
import { UserModel } from '../model/user.model';

@Controller('auth-controller')
export class AuthControllerController {

  constructor(private readonly AuthServiceService: AuthServiceService) { }
  @Get('/getUsers')
  getUsers(): Promise<UserModel[]> {
    return this.AuthServiceService.get();
  }

  @Post('/addUser')
  addUser(@Body() user: UserModelDTO): Promise<UserModel> {
    return this.AuthServiceService.addUser(user);
  }
  @Post('/loginUser')
  loginUser(@Body() userCredentials: CredentialsDTO): Promise<UserModel> {
    return this.AuthServiceService.loginUser(userCredentials);
  }
}
