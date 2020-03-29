class Response {
  constructor(status, data) {
    this.headers = {
      'Content-Type': 'application/vnd.api+json'
    };
    this.statusCode = status;
    this.body = this.isString(data) ? data : JSON.stringify(data);
  }

  isString(value) {
    return typeof value === 'string' || value instanceof String;
  }
}

module.exports = Response;
