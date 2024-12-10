import {
  SyncPullChanges,
  SyncPullChangesUseCase,
} from '@/domain/usercases/sync/sync-pull';
import { inject, singleton } from 'tsyringe';
import { UserRepository } from '@/domain/repositories/user/use-repository';
import { ValidateDto } from '@/decorators/validateDto';
import { SyncUserDto } from '@/domain/dtos/user/sync-user-dto';

@singleton()
export class SyncPullChangesService implements SyncPullChangesUseCase {
  constructor(
    @inject(UserRepository) private readonly userRepository: UserRepository,
  ) {}
  @ValidateDto(SyncUserDto)
  async handle(input: SyncPullChanges.Input): SyncPullChanges.Output {
    const rawSyncResponse =
      await this.userRepository.pullAllChangesAfterTimestamp(input);

    return rawSyncResponse;
  }
}
