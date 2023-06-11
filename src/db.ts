import dotenv from 'dotenv';
import { createConnection, ConnectionOptions } from 'typeorm';

dotenv.config();

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  entities: [],
  migrations: [],
};

createConnection(connectionOptions)
  .then(() => {
    console.log('Подключение к базе данных успешно установлено');
  })
  .catch((error) => {
    console.error('Ошибка подключения к базе данных:', error);
  });
