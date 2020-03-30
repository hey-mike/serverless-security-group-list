module.exports.event = {
  headers: {
    'Content-Type': 'application/vnd.api+json'
  },
  body: {
    customerId: '1234'
  }
};

module.exports.context = {
  serverlessSdk: {
    tagEvent: jest.fn(),
    captureError: jest.fn()
  }
};
