export class HTTPErrorClass extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode || 500;
  }
}

export const HTTPError = (statusCode, message) => {
  return new HTTPErrorClass(statusCode, message);
};

export const errorHandler = (fn) => {
  return async (req, res, next) => {
    try {
      return await fn(req, res, next);
    } catch (error) {
      return next(error);
    }
  };
};
