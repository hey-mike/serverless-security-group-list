const { Response, SuccessResponse, ErrorResponse } = require('../../../src/api/utils/response');
const { emptySecurityList, securityList } = require('../../mocks/securityGroups');

describe('Response class', () => {
  it('should create a Response instance', () => {
    const response = new Response(null, null);
    expect(response).toBeDefined();
    expect(response).toHaveProperty('headers');
    expect(response).toHaveProperty('statusCode');
    expect(response).toHaveProperty('body');
    expect(response.body).toHaveProperty('meta');
  });
});

describe('Success Response class', () => {
  it('should create a Success Response instance', () => {
    const response = new SuccessResponse(null, null);
    expect(response).toBeDefined();
    expect(response).toHaveProperty('headers');
    expect(response).toHaveProperty('statusCode');
    expect(response).toHaveProperty('body');
    expect(response.body).toHaveProperty('data');
    expect(response.body).not.toHaveProperty('errors');
  });
  it('should create a Response with status 200', () => {
    let response = new SuccessResponse(200, emptySecurityList);
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toBe(JSON.stringify(emptySecurityList));

    response = new SuccessResponse(200, JSON.stringify(securityList));
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toBe(JSON.stringify(securityList));
  });
  it('should create a Response with status 201', () => {
    const response = new SuccessResponse(201, null);
    expect(response.statusCode).toBe(201);
  });
});

describe('Error Response class', () => {
  it('should create a Error Response instance', () => {
    const response = new ErrorResponse(null, null);
    expect(response).toBeDefined();
    expect(response).toHaveProperty('headers');
    expect(response).toHaveProperty('statusCode');
    expect(response).toHaveProperty('body');
    expect(response.body).not.toHaveProperty('data');
    expect(response.body).toHaveProperty('errors');
  });
  it('should create a Response with status 403', () => {
    const testMsg = JSON.stringify({ message: 'test' });
    const response = new ErrorResponse(403, testMsg);
    expect(response.statusCode).toBe(403);
    expect(response.body.errors).toBe(testMsg);
  });
  it('should create a Response with status 500', () => {
    const testMsg = JSON.stringify({ message: 'test' });
    const response = new ErrorResponse(500, testMsg);
    expect(response.statusCode).toBe(500);
    expect(response.body.errors).toBe(testMsg);
  });
});
