require('dotenv').config();

const logger = require('../utils/winston.logger');

const config = {
  development: {
    logging: (msg) => logger.api.debug(`Database: ${process.env.DB_DATABASE} - ${msg}`),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: '0',
  },
  test: {
    logging: (msg) => logger.api.debug(`Database: ${process.env.DB_DATABASE} - ${msg}`),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: '0',
  },
  production: {
    logging: (msg) => logger.api.debug(`Database: ${process.env.DB_DATABASE} - ${msg}`),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: 'mysql', 
    operatorsAliases: '0',
  },
};

module.exports = config;
