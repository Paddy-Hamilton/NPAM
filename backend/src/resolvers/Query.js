const { getUserId } = require("../utils");

const Query = {
  feed(parent, args, ctx, info) {
    return ctx.db.query.posts({ where: { isPublished: true } }, info);
  },

  drafts(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error("You must be logged in to view drafts ");
    }
    const where = {
      isPublished: false,
      author: {
        id
      }
    };

    return ctx.db.query.posts({ where }, info);
  },

  post(parent, { id }, ctx, info) {
    return ctx.db.query.post({ where: { id } }, info);
  },

  me(
    parent,
    args,
    {
      db,
      request: { userId }
    },
    info
  ) {
    if (!userId) {
      return null;
      return new Error("You must be logged in to view me");
    }
    return db.query.user({ where: { id: userId } }, info);
  }
};

module.exports = { Query };
