class Payload {
  constructor() {
    this.meta = {
      copyright: 'Copyright 2020 @Michael Luo.',
      authors: ['Michael Luo']
    };
  }
}

class SuccessPayload extends Payload {
  constructor(body) {
    super();
    this.meta.totalCount = body.SecurityGroups.length;
    this.data = body.SecurityGroups;
  }
}
class ErrorPayload extends Payload {
  constructor(error) {
    super();
    this.errors = error;
  }
}

module.exports = {
  SuccessPayload,
  ErrorPayload
};
