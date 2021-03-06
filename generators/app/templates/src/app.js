import SwaggerExpress from 'swagger-express-mw';
import app from 'express';
import config from './config/environment';
import db from './config/db'; // eslint-disable-line no-unused-vars

const server = app();

export const init = () => {
  const appConfig = {
    appRoot: __dirname, // required config
  };

  SwaggerExpress.create(appConfig, (err, swaggerExpress) => {
    if (err) { throw err; }

    // install middleware
    swaggerExpress.register(server);

    server.listen(config.port);
  });
};

export default server; // for testing
