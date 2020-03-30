const SecurityGroupService = require('../services/securityGroupService');
const { SuccessResponse, ErrorResponse } = require('./utils/response');
const { SuccessPayload, ErrorPayload } = require('./utils/payload');
const { headerValidator } = require('./utils/headerValidator');
const securityGroupService = new SecurityGroupService();

module.exports.list = async (event, context) => {
  try {
    // content negotiation
    headerValidator(event.headers);

    // get the security groups
    const data = await securityGroupService.getSecurityGroups();

    // construct current resource url
    const link = `https://${event.headers.Host}${event.resource}`;

    // construct response payload
    const payload = new SuccessPayload(link, data);

    return new SuccessResponse(200, payload);
  } catch (err) {
    context.serverlessSdk.captureError(err);

    // construct errors
    const errors = new ErrorPayload();
    errors.addError(err);

    return new ErrorResponse(err.statusCode ? err.statusCode : 500, errors);
  }
};
