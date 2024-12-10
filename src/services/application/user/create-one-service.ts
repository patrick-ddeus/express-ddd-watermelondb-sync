import { UserRepository } from '@/domain/repositories/user/use-repository';
import { inject, singleton } from 'tsyringe';
import {
  UserCreateOne,
  UserUseCaseCreateOne,
} from '@/domain/usercases/user/create-one';
import { BadRequestError } from '@/validations/errors';
import { ValidateDto } from '@/decorators/validateDto';
import { CreateUserDto } from '@/domain/dtos/user/create-user-dto';

@singleton()
export class UserCreateOneService implements UserUseCaseCreateOne {
  constructor(
    @inject(UserRepository) private readonly userRepository: UserRepository,
  ) {}
  @ValidateDto(CreateUserDto)
  async handle(input: UserCreateOne.Input): UserCreateOne.Output {
    try {
      const user = await this.userRepository.createOne(input);

      return user;
    } catch (error) {
      throw new BadRequestError(`Error ao salvar ${error}`);
    }
  }
}
