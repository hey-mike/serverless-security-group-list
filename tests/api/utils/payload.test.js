const { SuccessPayload } = require('../../../src/api/utils/payload');
const { emptySecurityList, securityList } = require('../../mocks/securityGroups');

describe('Utils: responseConverter', () => {
  it('should convert to JSON api format', () => {
    const payload = new SuccessPayload(securityList);
    expect(payload).toHaveProperty('meta');
    expect(payload).toHaveProperty('data');
    expect(payload.meta).toHaveProperty('copyright');
    expect(payload.meta).toHaveProperty('authors');
    expect(payload.meta).toHaveProperty('totalCount');

    expect(payload.meta.totalCount).toEqual(securityList.SecurityGroups.length);
    expect(payload.data).toEqual(securityList.SecurityGroups);
  });
});
