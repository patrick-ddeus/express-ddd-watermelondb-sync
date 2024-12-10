import { UserRepository } from '@/domain/repositories/user/use-repository';
import { inject, singleton } from 'tsyringe';
import {
  UserUseCaseListOne,
  UserListOne,
} from '@/domain/usercases/user/list-one';

@singleton()
export class UserListOneService implements UserUseCaseListOne {
  constructor(
    @inject(UserRepository) private readonly userRepository: UserRepository,
  ) {}

  async handle(input: UserListOne.Input): UserListOne.Output {
    return null;
  }
}
