import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/portfolio',
  {
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    dialect: 'postgres',
  }
);

export default sequelize;
