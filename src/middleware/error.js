import { HTTPErrorClass } from '../utils/HTTPError.js';

// eslint-disable-next-line no-unused-vars
export default (err, req, res, next) => {
  console.log('😀');
  if (req.url.includes('/api|user/') && err instanceof HTTPErrorClass) {
    return res.status(err?.statusCode).json({ error: err.message });
  }
  if (req.url.includes('/api|user/')) {
    console.log('😀');
    return res.status(500).json({ error: err });
  }
  console.log('😡');
  return res.status(500).send(err.message);
  // TODO
  /* if (err instanceof HTTPErrorClass) {
    return RENDER HTML ERROR
  } 
  return RENDER HTML ERROR
  */
};
