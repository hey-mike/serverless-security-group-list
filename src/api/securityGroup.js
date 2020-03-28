const SecurityGroupService = require('../services/securityGroupService');
const securityGroupService = new SecurityGroupService();

module.exports.list = async (event, context, callback) => {
  let response = {};
  try {
    const data = await securityGroupService.getSecurityGroups();
    response = {
      statusCode: 200,
      body: data
    };
  } catch (err) {
    console.log('err', err);
    response = {
      statusCode: 404,
      body: { message: 'NOT FOUND' }
    };
    console.log(`Unable to find security groups`);
  }

  return response;
};
