import dotenv from 'dotenv';

dotenv.config();

console.log('process dotenv env', process.env);

export default {
  port: process.env.PORT || 3000,
  PROD_PORT: process.env.PROD_PORT || 5000,
  environment: process.env.NODE_ENV || 'development',
};
