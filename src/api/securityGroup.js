const SecurityGroupService = require('../services/securityGroupService');
const securityGroupService = new SecurityGroupService();

module.exports.list = async (event, context, callback) => {
  context.serverlessSdk.tagEvent('customer-id', event.body.customerId, {
    demoUser: true,
    freeTrialExpires: '2020-09-01'
  });

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
    response.statusCode = 500;
    response.body = JSON.stringify(err);
  }

  return response;
};
