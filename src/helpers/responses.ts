import { HttpResponse } from '@/main/protocols/http/IResponse';

export function ok(body: any): HttpResponse {
  return {
    body: body,
    statusCode: 200,
  };
}
