const { captureError } = require('./serverless_sdk');
const SecurityGroupService = require('../services/securityGroupService');
const securityGroupService = new SecurityGroupService();

module.exports.list = async (event, context, callback) => {
  let response = {
    headers: 'application/vnd.api+json'
  };
  try {
    const data = await securityGroupService.getSecurityGroups();
    response.statusCode = 200;
    response.body = JSON.stringify(data);
  } catch (err) {
    captureError(err);
    response.statusCode = 500;
    response.body = JSON.stringify(err);
  }

  return response;
};
