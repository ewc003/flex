import { Controller, Get, Put } from '@nestjs/common';

import { UserService } from './user.service';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getData(): { message: string } {
    return this.userService.getData();
  }

  @Put()
  putData(): void {
    return this.userService.putData();
  } 
}
