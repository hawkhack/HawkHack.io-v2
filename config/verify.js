module.exports = () => {
  return (req, res, next) => {
    if (!req.user.verified) {
      return res.status(401).json("you need to verify email");
    }
    console.log("verified");
    next();
  };
};
