/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class UserModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  username: string;
  @Column()
  password: string;
  @Column()
  salt: string;
  @Column({
    unique: true
  })
  email: string;
  @Column()
  movies: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
}
