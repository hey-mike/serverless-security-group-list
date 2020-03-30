class Payload {
  constructor() {
    this.meta = {
      copyright: 'Copyright 2020 @Michael Luo.',
      authors: ['Michael Luo']
    };
  }
}

class SuccessPayload extends Payload {
  constructor(link, body) {
    super(link);
    this.meta.totalCount = body.SecurityGroups.length;
    this.data = body.SecurityGroups;
    this.link = {
      self: link
    };
  }
}
class ErrorPayload extends Payload {
  constructor(errors = []) {
    super();
    this.errors = errors;
  }
  addError(error) {
    if (error) {
      this.errors.push(error.message);
    }
  }
}

module.exports = {
  SuccessPayload,
  ErrorPayload
};
