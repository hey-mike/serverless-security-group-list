const SecurityGroupService = require('../services/securityGroupService');
const { SuccessResponse, ErrorResponse } = require('./utils/response');
const { headerValidator } = require('./utils/headerValidator');
const securityGroupService = new SecurityGroupService();

module.exports.list = async (event, context) => {
  try {
    headerValidator(event.headers);
    const data = await securityGroupService.getSecurityGroups();
    return new SuccessResponse(200, data);
  } catch (err) {
    context.serverlessSdk.captureError(err);
    return new ErrorResponse(err.statusCode ? err.statusCode : 500, err);
  }
};
