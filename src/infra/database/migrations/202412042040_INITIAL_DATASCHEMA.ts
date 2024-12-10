import { User } from '@/domain/entities/User';
import { AppDataSource } from '../datasource';

const userRepository = AppDataSource.getRepository(User);
const user = new User();
user.firstName = 'Timber';
user.lastName = 'Saw';
user.age = 25;

userRepository.save(user);
