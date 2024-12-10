import { singleton } from 'tsyringe';
import { User } from '../../entities/User';
import {
  IsNull,
  LessThan,
  LessThanOrEqual,
  MoreThanOrEqual,
  Repository,
} from 'typeorm';
import { AppDataSource } from '@/infra/database/datasource';
import { IUserRepository } from '@/domain/protocols/IUserRepository';
import { UserListOne } from '@/domain/usercases/user/list-one';
import { UserCreateOne } from '@/domain/usercases/user/create-one';
import { SyncPullChanges } from '@/domain/usercases/sync/sync-pull';

@singleton()
export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async ListOne(input: UserListOne.Input): UserListOne.Output {
    const user = await this.repository.findOne({ where: { id: +input.id } });

    return user;
  }

  async createOne(input: UserCreateOne.Input): UserCreateOne.Output {
    const user = new User();

    user.age = input.age;
    user.firstName = input.firstName;
    user.lastName = input.lastName;

    const newUser = await this.repository.save(user);
    return newUser;
  }

  async pullAllChangesAfterTimestamp(
    input: SyncPullChanges.Input,
  ): SyncPullChanges.Output {
    const lastPulledAt = new Date(input.lastPulledAt);

    const created = await this.repository.find({
      select: ['id', 'age', 'firstName', 'lastName'],
      where: {
        createdAt: MoreThanOrEqual(lastPulledAt),
        deletedAt: IsNull(),
      },
    });

    const updated = await this.repository.find({
      select: ['id', 'age', 'firstName', 'lastName'],
      where: {
        updatedAt: MoreThanOrEqual(lastPulledAt),
        deletedAt: IsNull(),
      },
    });

    const deleted = (
      await this.repository.find({
        select: ['id'],
        where: {
          deletedAt: MoreThanOrEqual(lastPulledAt),
        },
        withDeleted: true,
      })
    ).map((item) => item.id.toString());

    return {
      changes: {
        users: {
          created,
          deleted,
          updated,
        },
      },
      timestamp: new Date().toISOString(),
    };
  }
}
