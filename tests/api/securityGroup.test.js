const AWS = require('aws-sdk');

// setup mock
const emptySecurityList = require('../mocks/emptySecurityList');
const { context, event } = require('../mocks/serverless');
jest.mock('aws-sdk');

const mockEC2DescribeSecurityGroups = jest.fn();
AWS.EC2 = jest.fn().mockImplementation(() => ({
  describeSecurityGroups: mockEC2DescribeSecurityGroups
}));

const { list } = require('../../src/api/securityGroup');

describe('Security Group Service', () => {
  beforeEach(() => {
    mockEC2DescribeSecurityGroups.reset;
  });
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
    expect(res.statusCode).toBe(200);
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
    expect(res.statusCode).toBe(200);
  });
  it('should return error 403', async () => {
    mockEC2DescribeSecurityGroups.mockImplementation(params => {
      return {
        promise() {
          const error = new Error('Whoops!');
          error.statusCode = 403;
          throw error;
        }
      };
    });

    const res = await list(event, context);
    expect(res).toHaveProperty('headers');
    expect(res).toHaveProperty('body');
    expect(res).toHaveProperty('statusCode');
    expect(res.statusCode).toBe(403);
  });
  it('should return error 500', async () => {
    mockEC2DescribeSecurityGroups.mockImplementation(params => {
      return {
        promise() {
          throw new Error('Whoops!');
        }
      };
    });

    const res = await list(event, context);
    expect(res).toHaveProperty('headers');
    expect(res).toHaveProperty('body');
    expect(res).toHaveProperty('statusCode');
    expect(res.statusCode).toBe(500);
  });
});
