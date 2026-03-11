import { Controller, Patch, Body, Param } from '@nestjs/common';
import UserService from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UserDto) {
    return this.userService.update(id, data);
  }
}
