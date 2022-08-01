import dotenv from 'dotenv';

dotenv.config();
const { PORT, NODE_ENV, DB_HOST, DB_PORT, DB_NAME_DEV, DB_NAME_TEST, DB_NAME_PROD, DB_USER, DB_PASSWORD } = process.env;
export default {
  port: PORT,
  host: DB_HOST,
  dbport: DB_PORT,
  databasename: NODE_ENV === 'dev' ? DB_NAME_DEV : NODE_ENV === 'test' ? DB_NAME_TEST : DB_NAME_PROD,
  user: DB_USER,
  password: DB_PASSWORD,
};
