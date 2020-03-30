const { headerValidator } = require('../../../src/api/utils/headerValidator');
const { event } = require('../../mocks/serverless');

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
});
