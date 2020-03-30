const HttpError = require('./httpError');

const getContentType = headers => {
  return headers['Content-Type'] ? headers['Content-Type'] : headers['content-type'];
};
const headerValidator = headers => {
  // Content-Type are case sensitive
  // Serverless testing is using smaller case
  let contentType = getContentType(headers);

  if ((contentType && contentType !== 'application/vnd.api+json') || !contentType) {
    throw new HttpError(415, JSON.stringify(headers));
  }

  const accept = headers['Accept'];
  if (accept && accept !== 'application/vnd.api+json') {
    throw new HttpError(406, 'Invalid Accept');
  }
};

module.exports = {
  getContentType,
  headerValidator
};
