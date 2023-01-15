/* eslint-disable prettier/prettier */
import { Entity } from 'typeorm';

@Entity('users')
export class UserModel {
  id: string;
  username: string;
  password: string;
  email: string;
  movies: string[];
  createdAt: Date;
  updatedAt: Date;
}
