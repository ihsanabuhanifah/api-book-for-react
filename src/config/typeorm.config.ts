import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'nest-learn-nest-postgres-1',
  port: 5432,
  username: 'postgres',
  password: 'rahasia',
  database: 'belajar',
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  synchronize: true,
};
