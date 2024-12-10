import { HttpError, HttpResponse } from '@/main/protocols/http/IResponse';
import { IController } from '@/infra/protocols/IController';
import { inject, singleton } from 'tsyringe';
import { UserCreateOneService } from '@/services/application/user/create-one-service';
import { UserUseCaseCreateOne } from '@/domain/usercases/user/create-one';
import { ok } from '@/helpers/responses';
import { isAppError } from '@/helpers/asserts';

type Request = {
  firstName: string;
  lastName: string;
  age: number;
};

@singleton()
export class CreateOneUserController implements IController<Request> {
  constructor(
    @inject(UserCreateOneService)
    private readonly userCreateOne: UserUseCaseCreateOne,
  ) {}
  async handle(request: Request): Promise<HttpResponse | HttpError> {
    const handleReponse = await this.userCreateOne.handle(request);

    if (isAppError(handleReponse)) {
      return handleReponse;
    }

    return ok(handleReponse);
  }
}
