module.exports = function verifyRole(...allowed) {
  const isAllowed = role => allowed.indexOf(role) > -1;

  // return a middleware
  return (req, res, next) => {
    console.log(req.user);
    if (req.user && isAllowed(req.user.role)) next();
    // role is allowed, so continue on the next middleware
    else {
      res.status(403).json({ message: "Forbidden" }); // user is forbidden
    }
  };
};
