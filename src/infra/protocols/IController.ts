import { HttpResponse } from '@/main/protocols/http/IResponse';

export interface IController<P = unknown> {
  handle(request: P): Promise<HttpResponse>;
}
