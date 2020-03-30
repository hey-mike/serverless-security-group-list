const _ = require('lodash');

class Response {
  constructor(status) {
    this.headers = {
      'Content-Type': 'application/vnd.api+json'
    };
    this.statusCode = status;
    this.body = {
      meta: {
        copyright: 'Copyright 2020 @Michael Luo.',
        authors: ['Michael Luo'],
        totalCount: 0
      }
    };
  }
}

class SuccessResponse extends Response {
  constructor(status, data) {
    super(status);
    this.body.meta.totalCount = data ? data.SecurityGroups.length : 0;
    this.body.data = JSON.stringify(data);
  }
}
class ErrorResponse extends Response {
  constructor(status, error) {
    super(status);
    this.body.errors = JSON.stringify(error);
  }
}

module.exports = {
  Response,
  SuccessResponse,
  ErrorResponse
};
