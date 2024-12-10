import { IJWTProtocol } from '@/infra/protocols/IJwtProtocol';
import { container, inject, injectable } from 'tsyringe';
import jwt, { SignOptions } from 'jsonwebtoken';

@injectable()
export class JWTService implements IJWTProtocol {
  constructor(
    @inject('jwtSecret') private readonly jwtSecret: string,
    @inject('jwtOptions') private readonly jwtOptions: SignOptions = {},
  ) {}

  sign<P extends object = object>(payload: P) {
    return jwt.sign(payload, this.jwtSecret, this.jwtOptions);
  }

  verify(token: string) {}
}

container.registerSingleton('jwtService', JWTService);
