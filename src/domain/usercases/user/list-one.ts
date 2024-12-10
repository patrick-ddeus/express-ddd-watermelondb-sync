import { User } from '../../entities/User';

export interface UserUseCaseListOne {
  handle(input: UserListOne.Input): UserListOne.Output;
}

export namespace UserListOne {
  export type Input = { id: string };
  export type Output = Promise<User | null>;
}
