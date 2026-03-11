import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Users from 'src/entity/user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async update(id: string, data: UserDto): Promise<any> {
    return this.userRepository.update(id, data);
  }
}
