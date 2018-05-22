const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const auth = {
  // async signup(parent, args, ctx, info) {
  //   const password = await bcrypt.hash(args.password, 10);
  //   const user = await ctx.db.mutation.createUser({
  //     data: { ...args, password }
  //   });

  //   return {
  //     token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
  //     user
  //   };
  // },

  async signin(parent, { email, password }, ctx, info) {
    console.log({ email, password });
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No such user found for email: ${email}`);
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error("Invalid password");
    }
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    ctx.response.cookie("token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 365,
      httpOnly: true
    });
    return user;
  },
  async signout(parent, args, ctx, info) {
    console.log("SIGNing OUT");
    ctx.response.clearCookie("token");
    return { message: "goodbye!" };
  }
};

module.exports = { auth };
