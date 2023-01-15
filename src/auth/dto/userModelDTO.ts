/* eslint-disable prettier/prettier */
import { IsNotEmpty, MinLength } from "class-validator";

export class UserModelDTO {

  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  @MinLength(3)
  password: string;
  @IsNotEmpty()
  salt: string;
  @IsNotEmpty()
  movies: string;
}