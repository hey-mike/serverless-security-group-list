const { SuccessPayload, ErrorPayload } = require('./payload');

class Response {
  constructor(status) {
    this.headers = {
      'Content-Type': 'application/vnd.api+json'
    };
    this.statusCode = status;
    this.body = {};
  }
}

class SuccessResponse extends Response {
  constructor(status, payload) {
    super(status);
    this.body = JSON.stringify(payload);
  }
}
class ErrorResponse extends Response {
  constructor(status, errors) {
    super(status);
    this.body = JSON.stringify(errors);
  }
}

module.exports = {
  Response,
  SuccessResponse,
  ErrorResponse
};
