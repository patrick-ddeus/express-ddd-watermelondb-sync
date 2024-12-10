import { IRepository } from '@/infra/protocols/IRepository';
import { UserListOne } from '../usercases/user/list-one';
import { UserCreateOne } from '../usercases/user/create-one';
import { SyncPullChanges } from '../usercases/sync/sync-pull';

export interface IUserRepository extends IRepository {
  ListOne(input: UserListOne.Input): UserListOne.Output;
  createOne?(input: UserCreateOne.Input): UserCreateOne.Output;
  pullAllChangesAfterTimestamp(input: SyncPullChanges.Input): SyncPullChanges.Output;
}
