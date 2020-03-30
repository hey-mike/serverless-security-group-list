const { SuccessPayload, ErrorPayload } = require('../../../src/api/utils/payload');
const { securityList } = require('../../mocks/securityGroups');

describe('Utils: responseConverter', () => {
  it('should convert to JSON Successful format', () => {
    const link = 'https://2mto8yqyqi.execute-api.ap-southeast-2.amazonaws.com/dev/groups';
    const payload = new SuccessPayload(link, securityList);

    expect(payload).toHaveProperty('meta');
    expect(payload).toHaveProperty('data');
    expect(payload).toHaveProperty('link');
    expect(payload.link).toHaveProperty('self');
    expect(payload.meta).toHaveProperty('copyright');
    expect(payload.meta).toHaveProperty('authors');
    expect(payload.meta).toHaveProperty('totalCount');

    expect(payload.meta.totalCount).toEqual(securityList.SecurityGroups.length);
    expect(payload.link.self).toEqual(link);
    expect(payload.data).toEqual(securityList.SecurityGroups);
  });

  it('should add error into error list', () => {
    const errorMsg = new Error({
      status: '400',
      detail: 'JSON parse error - Expecting property name at line 1 column 2 (char 1).'
    });
    const payload = new ErrorPayload();

    expect(payload.errors.length).toBe(0);
    payload.addError(null);
    expect(payload.errors.length).toBe(0);
    payload.addError(errorMsg);
    expect(payload.errors.length).toBe(1);
    payload.addError(errorMsg);
    expect(payload.errors.length).toBe(2);
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
