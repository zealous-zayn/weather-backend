let appConfig = {};

appConfig.port = 3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.apiVersion = '/api/v1';
appConfig.appid = ''

module.exports = {
    port : appConfig.port,
    allowedCorsOrigin : appConfig.allowedCorsOrigin,
    apiVersion : appConfig.apiVersion,
    appId : appConfig.appid
};