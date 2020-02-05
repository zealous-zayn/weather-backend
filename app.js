const express = require("express");
const appConfig = require("./config/appConfig")
const fs = require('fs');
const bodyParser = require('body-parser');
const http = require('http');
const routeLoggerMiddleware = require('./App/middlewares/routeLogger');
const globalErrorMiddleware  = require('./App/middlewares/appErrorHandler');
const logger = require('./App/libs/loggerLib');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routeLoggerMiddleware.logIp);
app.use(globalErrorMiddleware.globalErrorHandler);

const routePath = './App/routes';

// Bootstrap route
fs.readdirSync(routePath).forEach(function (file) {
    if (~file.indexOf('.js')) {
      let route = require(routePath + '/' + file);
      route.setRouter(app);
    }
  });

app.use(globalErrorMiddleware.globalNotFoundHandler)

  const server = http.createServer(app);
// start listening to http server
server.listen(appConfig.port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
    if (error.syscall !== 'listen') {
      logger.captureError(error.code + 'not equal listen', 'serverOnErrorHandler', 10)
      throw error;
    }
  
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        logger.captureError(error.code + ':elavated privileges required', 'serverOnErrorHandler', 10);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        logger.captureError(error.code + ':port is already in use.', 'serverOnErrorHandler', 10);
        process.exit(1);
        break;
      default:
        logger.captureError(error.code + ':some unknown error occured', 'serverOnErrorHandler', 10);
        throw error;
    }
  }

function onListening() {
  
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    ('Listening on ' + bind);
    logger.captureInfo('server listening on port' + addr.port, 'serverOnListeningHandler', 10);
  }
  
  process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
  });
   