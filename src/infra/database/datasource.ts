import { DataSource } from 'typeorm';
import entities from '@/domain/entities';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'ddd-aprouch',
  entities: entities,
  synchronize: true,
});
