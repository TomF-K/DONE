import { HTTPErrorClass } from '../utils/HTTPError.js';

// eslint-disable-next-line no-unused-vars
export default (err, req, res, next) => {
  if (/api|user/.test(req.url) && err instanceof HTTPErrorClass) {
    return res.status(err?.statusCode).json({ error: err.message });
  }
  if (/api|user/.test(req.url)) {
    return res.status(500).json({ error: err.message });
  }
  return res.status(500).send(err.message);
  // TODO
  /* if (err instanceof HTTPErrorClass) {
    return RENDER HTML ERROR
  } 
  return RENDER HTML ERROR
  */
};
