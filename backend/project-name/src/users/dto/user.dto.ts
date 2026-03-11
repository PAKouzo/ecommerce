/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsOptional, IsString } from 'class-validator';

export class UserDto {
  id: string;

  @IsOptional()
  @IsString()
  phone_number: string;
}
