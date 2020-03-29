const SecurityGroupService = require('../services/securityGroupService');
const securityGroupService = new SecurityGroupService();

module.exports.list = async (event, context) => {
  let response = {
    headers: {
      'Content-Type': 'application/vnd.api+json'
    }
  };
  try {
    const data = await securityGroupService.getSecurityGroups();
    response.statusCode = 200;
    response.body = JSON.stringify(data);
  } catch (err) {
    context.serverlessSdk.captureError(err);
    response.statusCode = err.statusCode ? err.statusCode : 500;
    response.body = JSON.stringify(err);
  }

  return response;
};
