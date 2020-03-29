const SecurityGroupService = require('../services/securityGroupService');
const Response = require('./utils/response');

const securityGroupService = new SecurityGroupService();

module.exports.list = async (event, context) => {
  try {
    const data = await securityGroupService.getSecurityGroups();
    return new Response(200, data);
  } catch (err) {
    context.serverlessSdk.captureError(err);
    return new Response(err.statusCode ? err.statusCode : 500, err);
  }
};
