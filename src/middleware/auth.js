export default (req, res, next) => {
  /* fake signed in user for now */
  req.userName = 'boaty mcboatface';
  req.userId = 'dH82koO';
  next();
};
