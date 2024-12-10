export class AppError {
  statusCode: number;
  body: unknown;

  constructor(message: string, statusCode: number) {
    this.statusCode = statusCode;
    this.body = {
      code: statusCode,
      message: message,
    };
  }
}

export class BadRequestError extends AppError {
  constructor(message: string) {
    super(message, 400);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string) {
    super(message, 400);
  }
}
