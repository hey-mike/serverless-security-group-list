const { SuccessPayload, ErrorPayload } = require('../../../src/api/utils/payload');
const { securityList } = require('../../mocks/securityGroups');

describe('Utils: responseConverter', () => {
  it('should convert to JSON Successful format', () => {
    const payload = new SuccessPayload(securityList);
    expect(payload).toHaveProperty('meta');
    expect(payload).toHaveProperty('data');
    expect(payload.meta).toHaveProperty('copyright');
    expect(payload.meta).toHaveProperty('authors');
    expect(payload.meta).toHaveProperty('totalCount');

    expect(payload.meta.totalCount).toEqual(securityList.SecurityGroups.length);
    expect(payload.data).toEqual(securityList.SecurityGroups);
  });

  it('should convert to Error object', () => {
    const errorMsg = new Error({
      status: '400',
      detail: 'JSON parse error - Expecting property name at line 1 column 2 (char 1).'
    });
    const payload = new ErrorPayload();
    payload.addError(errorMsg);
    expect(payload).toHaveProperty('meta');
    expect(payload).not.toHaveProperty('data');
    expect(payload).toHaveProperty('errors');
    expect(payload.meta).toHaveProperty('copyright');
    expect(payload.meta).toHaveProperty('authors');

    expect(payload.errors).toEqual([errorMsg.message]);
  });
});
