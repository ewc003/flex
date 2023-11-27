import { Test } from '@nestjs/testing';

import { UserService } from './User.service';

describe('UserService', () => {
  let service: UserService;

  beforeAll(async () => {
    const User = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = User.get<UserService>(UserService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
