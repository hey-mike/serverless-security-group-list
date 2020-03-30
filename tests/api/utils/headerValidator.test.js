const { headerValidator, getContentType } = require('../../../src/api/utils/headerValidator');
const { event } = require('../../mocks/serverless');

describe('Utils: getContentType', () => {
  let headers;
  beforeEach(() => {
    headers = {};
  });
  it('should return contentType when header content-type in upper case', () => {
    headers['Content-Type'] = 'application/vnd.api+json;charset=utf-8';
    const contentType = getContentType(headers);
    expect(contentType).toBe('application/vnd.api+json;charset=utf-8');
  });

  it('should return contentType when header content-type in lower case', () => {
    headers['content-type'] = 'application/vnd.api+json;charset=utf-8';
    const contentType = getContentType(headers);
    expect(contentType).toBe('application/vnd.api+json;charset=utf-8');
  });
});
describe('Utils: headerValidator', () => {
  it('should return error with status 406', () => {
    event.headers['Accept'] = 'application/vnd.api+json;charset=utf-8';
    try {
      headerValidator(event.headers);
    } catch (error) {
      expect(error.statusCode).toBe(406);
    }
  });
  it('should return error with status 415', () => {
    event.headers['Content-Type'] = 'application/vnd.api+json;charset=utf-8';
    try {
      headerValidator(event.headers);
    } catch (error) {
      expect(error.statusCode).toBe(415);
    }
  });

  it('should return error with status 415', () => {
    event.headers['content-type'] = 'application/vnd.api+json;charset=utf-8';
    try {
      headerValidator(event.headers);
    } catch (error) {
      expect(error.statusCode).toBe(415);
    }
  });
});
