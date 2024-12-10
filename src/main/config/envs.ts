import 'dotenv/config';
import { container } from 'tsyringe';

const { jwtSecret, salt } = process.env;

container.register('jwtSecret', { useValue: jwtSecret });
container.register('bcryptSaltRounds', { useValue: salt });
container.register('jwtOptions', { useValue: {} });
