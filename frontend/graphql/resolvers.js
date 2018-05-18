export default {
  Mutation: {
    toggleAddPost: (_, { open }, { cache, getCacheKey }) => {
      console.log({ cache });
      const data = { ui_addPostModal: open, __typename: 'ui_addPostModal' };
      cache.writeData({ data });
      return null;
    }
  }
};
