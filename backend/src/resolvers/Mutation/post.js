const { getUserId } = require("../../utils");
var sanitizeHtml = require("sanitize-html");
const post = {
  async createDraft(parent, { title, text, img }, ctx, info) {
    const { userId } = ctx.request;
    console.log({ userId });
    if (!userId) {
      throw new Error("You must be logged in to create a draft");
    }
    return ctx.db.mutation.createPost(
      {
        data: {
          title: sanitizeHtml(title),
          text: sanitizeHtml(text),
          img: sanitizeHtml(img) || process.env.RANDOM_IMAGE,
          isPublished: false,
          author: {
            connect: { id: userId }
          }
        }
      },
      info
    );
  },

  async publish(parent, { id }, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error("You must be logged in to publish a post");
    }
    const postExists = await ctx.db.exists.Post({
      id,
      author: { id: userId }
    });
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`);
    }

    return ctx.db.mutation.updatePost(
      {
        where: { id },
        data: { isPublished: true }
      },
      info
    );
  },

  async deletePost(parent, { id }, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error("You must be logged in to delete a post");
    }
    const postExists = await ctx.db.exists.Post({
      id,
      author: { id: userId }
    });
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`);
    }

    return ctx.db.mutation.deletePost({ where: { id } });
  }
};

module.exports = { post };
