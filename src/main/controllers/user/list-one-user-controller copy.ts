import { HttpResponse } from '@/main/protocols/http/IResponse';
import { IController } from '@/infra/protocols/IController';
import { inject, singleton } from 'tsyringe';
import { UserUseCaseListOne } from '@/domain/usercases/user/list-one';
import { UserListOneService } from '@/services/application/user/list-one-service';

type Request = {
  id: string;
};

@singleton()
export class ListOneUserController implements IController<Request> {
  constructor(
    @inject(UserListOneService)
    private readonly UserService: UserUseCaseListOne,
  ) {}
  async handle(request: Request): Promise<HttpResponse> {
    return {
      body: {},
      statusCode: 400,
    };
  }
}
