const HttpError = require('./httpError');

exports.headerValidator = headers => {
  const contentType = headers['Content-Type'];
  const accept = headers['Accept'];

  if ((contentType && contentType !== 'application/vnd.api+json') || !contentType) {
    throw new HttpError(415, 'Invalid Content-Type');
  }

  if (accept && accept !== 'application/vnd.api+json') {
    throw new HttpError(406, 'Invalid Accept');
  }
};
