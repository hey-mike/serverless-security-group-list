const AWS = require('aws-sdk');

class SecurityGroupService {
  constructor() {
    this.ec2 = new AWS.EC2();
  }
  /**
   * Get a list of all EC2 security groups in an AWS Account.
   */
  async getSecurityGroups() {
    return await this.ec2.describeSecurityGroups({}).promise();
  }
}

module.exports = SecurityGroupService;
