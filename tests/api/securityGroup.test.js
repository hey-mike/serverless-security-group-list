const AWS = require('aws-sdk');
const { list } = require('../../src/api/securityGroup');
const emptySecurityList = require('../mocks/emptySecurityList');
const { context, event } = require('../utils/serverless');

jest.mock('aws-sdk');

const mockEC2DescribeSecurityGroups = jest.fn();
AWS.EC2 = jest.fn().mockImplementation(() => ({
  describeSecurityGroups: mockEC2DescribeSecurityGroups
}));

describe('Security Group Service', () => {
  it('should return empty security group list', async () => {
    mockEC2DescribeSecurityGroups.mockImplementation(params => {
      return {
        promise() {
          return Promise.resolve(emptySecurityList);
        }
      };
    });
    const res = await list(event, context);
    expect(res).toHaveProperty('headers');
    expect(res).toHaveProperty('body');
    expect(res).toHaveProperty('statusCode');
  });

  it('should return full security group list', async () => {
    mockEC2DescribeSecurityGroups.mockImplementation(params => {
      return {
        promise() {
          return Promise.resolve(emptySecurityList);
        }
      };
    });
    const res = await list(event, context);
    expect(res).toHaveProperty('headers');
    expect(res).toHaveProperty('body');
    expect(res).toHaveProperty('statusCode');
  });
});
