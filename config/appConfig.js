let appConfig = {};

appConfig.port = 3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.apiVersion = '/api/v1';
appConfig.appid = '341c88dce2fbc34aa9d3c5b05473a1ba'

module.exports = {
    port : appConfig.port,
    allowedCorsOrigin : appConfig.allowedCorsOrigin,
    apiVersion : appConfig.apiVersion,
    appId : appConfig.appid
};