const Response = require('../../../src/api/utils/response');

describe('Response class', () => {
  it('should create a Response instance', () => {
    const response = new Response(null, null);
    expect(response).toBeDefined();
    expect(response).toHaveProperty('headers');
    expect(response).toHaveProperty('statusCode');
    expect(response).toHaveProperty('body');
  });
  it('should create a Response with status 403', () => {
    const response = new Response(403, null);
    expect(response.statusCode).toBe(403);
  });
  it('should create a Response with status 500', () => {
    const response = new Response(500, null);
    expect(response.statusCode).toBe(500);
  });

  it('should response status 401 with string body when data is a object', () => {
    const testMsg = { message: 'test' };
    const response = new Response(401, testMsg);
    expect(response.statusCode).toBe(401);
    expect(response.body).toBe(JSON.stringify(testMsg));
  });

  it('should response status 401 with string body when data is a string', () => {
    const testMsg = JSON.stringify({ message: 'test' });
    const response = new Response(401, testMsg);
    expect(response.statusCode).toBe(401);
    expect(response.body).toBe(testMsg);
  });
});
