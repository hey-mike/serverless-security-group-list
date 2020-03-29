module.exports.event = {
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
