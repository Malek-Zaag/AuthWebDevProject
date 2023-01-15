/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class CredentialsDTO {
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
}