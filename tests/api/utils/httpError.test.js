const httpError = require('../../../src/api/utils/httpError');

describe('Utils: HttpError', () => {
  it('should create http errors with status 406', () => {
    const error = new httpError(406);
    expect(error.statusCode).toBe(406);
  });

  it('should create http errors with status 415', () => {
    const error = new httpError(415);
    expect(error.statusCode).toBe(415);
  });
});
