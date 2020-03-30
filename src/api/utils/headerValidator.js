const HttpError = require('./httpError');
const { JSON_API_MEDIA_TYPE } = require('../../constants');

// Content-Type are case sensitive
// Serverless testing is using smaller case
const getContentType = headers => {
  return headers['Content-Type'] ? headers['Content-Type'] : headers['content-type'];
};
const validateContentType = headers => {
  const contentType = getContentType(headers);

  return (contentType && contentType !== JSON_API_MEDIA_TYPE) || !contentType;
};

// Servers MUST respond with a 406 Not Acceptable status code
// if a request’s Accept header contains the JSON:API media type
// and all instances of that media type are modified with media type parameters.
const validateAccept = headers => {
  const accept = headers['Accept'];
  return accept && accept.includes(JSON_API_MEDIA_TYPE) && accept !== JSON_API_MEDIA_TYPE;
};
const headerValidator = headers => {
  if (validateContentType(headers)) {
    throw new HttpError(415, 'Unsupported Media Type');
  }

  if (validateAccept(headers)) {
    throw new HttpError(406, 'Not Accept');
  }
};

module.exports = {
  getContentType,
  headerValidator
};
