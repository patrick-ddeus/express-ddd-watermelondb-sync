export interface HttpResponse<T = unknown> {
  statusCode: number;
  body: T;
}

export interface HttpError {
  statusCode: number;
  body: {
    code: string;
    message: string;
  };
}
