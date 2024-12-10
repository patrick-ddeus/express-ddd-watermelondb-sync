import { HttpError, HttpResponse } from '@/main/protocols/http/IResponse';
import { IController } from '@/infra/protocols/IController';
import { inject, singleton } from 'tsyringe';
import { ok } from '@/helpers/responses';
import { isAppError } from '@/helpers/asserts';
import {
  SyncPullChangesUseCase,
  Timestamp,
} from '@/domain/usercases/sync/sync-pull';
import { SyncPullChangesService } from '@/services/application/user/sync-pull-user-service';

type Request = { lastPulledAt: Timestamp; schemaVersion?: number };

@singleton()
export class SyncPullUserController implements IController<Request> {
  constructor(
    @inject(SyncPullChangesService)
    private readonly userSyncPull: SyncPullChangesUseCase,
  ) {}
  async handle(request: Request): Promise<HttpResponse | HttpError> {
    const handleReponse = await this.userSyncPull.handle(request);

    if (isAppError(handleReponse)) {
      return handleReponse;
    }

    return ok(handleReponse);
  }
}
