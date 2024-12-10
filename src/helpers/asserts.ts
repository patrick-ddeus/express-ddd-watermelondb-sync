import { HttpError, HttpResponse } from '@/main/protocols/http/IResponse';
import { AppError } from '../validations/errors';

export function isHttpRequestSuccess(
  response: HttpResponse,
): response is HttpResponse {
  return response.statusCode >= 200 && response.statusCode < 300;
}

export function isHttpRequestFailure(
  response: HttpResponse,
): response is HttpError {
  return response.statusCode >= 400;
}

export function isAppError(obj: any) {
  return obj instanceof AppError;
}
