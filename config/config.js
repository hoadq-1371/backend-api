const Joi = require('joi');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(['development', 'production', 'test', 'provision'])
    .default('development'),
  PORT: Joi.number()
    .default(4040),
  MONGOOSE_DEBUG: Joi.boolean()
    .when('NODE_ENV', {
      is: Joi.string().equal('development'),
      then: Joi.boolean().default(true),
      otherwise: Joi.boolean().default(false)
    }),
  JWT_SECRET: Joi.string().required().default('0a6b944d-d2fb-46fc-a85e-0295c986cd9f').description('JWT Secret required to sign'),
  MONGO_HOST: Joi.string().required().description('Mongo DB host url'),
  MONGO_PORT: Joi.number().default(27017)
}).unknown().required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongooseDebug: envVars.MONGOOSE_DEBUG,
  jwtSecret: envVars.JWT_SECRET,
  mongo: {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    port: process.env.DATABASE_PORT || 27017,
    database: process.env.DATABASE_NAME || 'backend-api-development'
  }
};

console.info(`database connect  ===========>>> : ${process.env.DATABASE_HOST} ${process.env.DATABASE_PORT}`);

module.exports = config;
