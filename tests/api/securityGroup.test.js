const AWS = require('aws-sdk');
const SecurityGroupService = require('../../src/services/securityGroupService');
const emptySecurityList = require('./mocks/emptySecurityList');

jest.mock('aws-sdk');

const mockEC2DescribeSecurityGroups = jest.fn();
AWS.EC2 = jest.fn().mockImplementation(() => ({
  describeSecurityGroups: mockEC2DescribeSecurityGroups
}));

describe('Security Group Service', () => {
  let securityGroupService;

  beforeEach(() => {
    mockEC2DescribeSecurityGroups.mockReset();
  });

  it('should call EC2 class constructor 1 time', () => {
    securityGroupService = new SecurityGroupService();
    expect(AWS.EC2).toHaveBeenCalledTimes(1);
  });

  it('should return empty security group list', async () => {
    mockEC2DescribeSecurityGroups.mockImplementation(params => {
      return {
        promise() {
          return Promise.resolve(emptySecurityList);
        }
      };
    });
    const list = await securityGroupService.getSecurityGroups();
    expect(list).toEqual(emptySecurityList);
    expect(list).toHaveProperty('SecurityGroups');
    expect(list.SecurityGroups.length).toBe(0);
  });
});
