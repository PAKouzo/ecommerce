import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Users from 'src/entity/user.entity';
import UserService from './user.service';
import UserController from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export default class UserModule {}
