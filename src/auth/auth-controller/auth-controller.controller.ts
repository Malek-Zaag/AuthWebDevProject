import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';

@Controller('auth-controller')
export class AuthControllerController {
  @Get('/')
  get(): void {
    console.log('Hello World');
  }
}
