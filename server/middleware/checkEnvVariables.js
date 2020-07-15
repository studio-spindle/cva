const { requiredEnv } = require('../lib/requiredEnv');

function checkEnvVariables(varArray) {
  return function(req, res, next) {
    requiredEnv(varArray, function (error) {
      if (error) {
        return next(error);
      }
    });
    return next();
  }
}

module.exports = checkEnvVariables;
