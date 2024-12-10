import { IJWTProtocol } from '@/infra/protocols/IJwtProtocol';
import { container, inject, injectable } from 'tsyringe';
import bcrypt from 'bcrypt';
import { IBcryptProtocol } from '@/infra/protocols/IBcryptProtocol';

@injectable()
export class BcryptService implements IBcryptProtocol {
  constructor(
    @inject('bcryptSaltRounds') private readonly saltRounds: number,
  ) {}

  async hash(data: string): Promise<string> {
    return bcrypt.hash(data, this.saltRounds);
  }

  // Método para comparar uma string com um hash
  async compare(data: string, hash: string): Promise<boolean> {
    return bcrypt.compare(data, hash);
  }
}

container.registerSingleton('bcryptService', BcryptService);
