const jwt = require("jsonwebtoken");

function getUserId(ctx) {
  const { token } = ctx.request.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    return userId;
  }

  throw new AuthError();
}

class AuthError extends Error {
  constructor() {
    super("Not authorized");
  }
}

module.exports = {
  getUserId,
  AuthError
};
