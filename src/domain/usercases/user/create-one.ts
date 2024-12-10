import { HttpError } from '@/main/protocols/http/IResponse';
import { User } from '../../entities/User';

export interface UserUseCaseCreateOne {
  handle(input: UserCreateOne.Input): UserCreateOne.Output;
}

export namespace UserCreateOne {
  export type Input = Pick<User, 'firstName' | 'age' | 'lastName'>;
  export type Output = Promise<User | HttpError>;
}
