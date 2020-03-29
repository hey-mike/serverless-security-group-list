class Response {
  constructor(status) {
    this.headers = {
      'Content-Type': 'application/vnd.api+json'
    };
    this.statusCode = status;
    this.body = {
      meta: {
        copyright: 'Copyright 2020 @Michael Luo.',
        authors: ['Michael Luo']
      }
    };
  }

  isString(value) {
    return typeof value === 'string' || value instanceof String;
  }
}

class SuccessResponse extends Response {
  constructor(status, data) {
    super(status);
    this.body.data = this.isString(data) ? data : JSON.stringify(data);
  }
}
class ErrorResponse extends Response {
  constructor(status, error) {
    super(status);
    this.body.errors = this.isString(error) ? error : JSON.stringify(error);
  }
}

module.exports = {
  Response,
  SuccessResponse,
  ErrorResponse
};
