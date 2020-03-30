const { Response, SuccessResponse, ErrorResponse } = require('../../../src/api/utils/response');
const { SuccessPayload, ErrorPayload } = require('../../../src/api/utils/payload');
const { emptySecurityList, securityList } = require('../../mocks/securityGroups');

describe('Utils: Response class', () => {
  it('should create a Response instance', () => {
    const response = new Response(null, null);
    expect(response).toBeDefined();
    expect(response).toHaveProperty('headers');
    expect(response).toHaveProperty('statusCode');
    expect(response).toHaveProperty('body');
  });
});

describe('Utils: Success Response class', () => {
  it('should create a Success Response instance', () => {
    const response = new SuccessResponse(200, emptySecurityList);
    expect(response).toBeDefined();
    expect(response).toHaveProperty('headers');
    expect(response).toHaveProperty('statusCode');
    expect(response).toHaveProperty('body');
  });
  it('should create a Response with status 200 with empty list', () => {
    const payload = new SuccessPayload('https://test.com', emptySecurityList);
    let response = new SuccessResponse(200, payload);
    expect(response.statusCode).toBe(200);

    const body = JSON.parse(response.body);
    expect(body.data).toEqual(emptySecurityList.SecurityGroups);
    expect(body.meta.totalCount).toBe(0);
  });
  it('should create a Response with status 200 with full list', () => {
    const payload = new SuccessPayload('https://test.com', securityList);

    let response = new SuccessResponse(200, payload);
    expect(response.statusCode).toBe(200);

    const body = JSON.parse(response.body);
    expect(body.data).toEqual(securityList.SecurityGroups);
    expect(body.meta.totalCount).toBe(securityList.SecurityGroups.length);
  });
});

describe('Utils: Error Response class', () => {
  it('should create a Error Response instance', () => {
    const payload = new ErrorPayload(null);
    const response = new ErrorResponse(null, payload);
    expect(response).toBeDefined();
    expect(response).toHaveProperty('headers');
    expect(response).toHaveProperty('statusCode');
    expect(response).toHaveProperty('body');

    const body = JSON.parse(response.body);
    expect(body).not.toHaveProperty('data');
    expect(body).toHaveProperty('errors');
  });
  it('should create a Response with status 403', () => {
    const errorMsg = {
      message: 'test error'
    };
    const errors = new ErrorPayload([errorMsg]);
    const response = new ErrorResponse(403, errors);

    expect(response.statusCode).toBe(403);

    const body = JSON.parse(response.body);
    expect(body).toHaveProperty('errors');
    expect(body.errors).toEqual([errorMsg]);
  });
  it('should create a Response with status 500', () => {
    const errorMsg = {
      message: 'test error'
    };
    const errors = new ErrorPayload([errorMsg]);
    const response = new ErrorResponse(500, errors);
    expect(response.statusCode).toBe(500);

    const body = JSON.parse(response.body);
    expect(body).toHaveProperty('errors');
    expect(body.errors).toEqual([errorMsg]);
  });
});
