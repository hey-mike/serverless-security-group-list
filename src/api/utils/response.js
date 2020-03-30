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
  constructor(status, data) {
    super(status);
    const payload = new SuccessPayload(data);
    this.body = JSON.stringify(payload);
  }
}
class ErrorResponse extends Response {
  constructor(status, error) {
    super(status);
    const errors = new ErrorPayload();
    errors.addError(error);
    this.body = JSON.stringify(errors);
  }
}

module.exports = {
  Response,
  SuccessResponse,
  ErrorResponse
};
