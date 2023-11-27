import { Test, TestingModule } from '@nestjs/testing';

import { UserController } from './User.controller';
import { UserService } from './User.service';

describe('UserController', () => {
  let User: TestingModule;

  beforeAll(async () => {
    User = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const UserController = User.get<UserController>(UserController);
      expect(UserController.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
