export interface IJWTProtocol {
  sign<P extends object = object>(payload: P): string;
  verify(token: string): void;
}
