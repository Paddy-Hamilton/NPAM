export default {
  Mutation: {
    toggleAddPost: (_, { open }, { cache, getCacheKey }) => {
      const data = { ui_addPostModal: open, __typename: 'ui_addPostModal' };
      cache.writeData({ data });
      return null;
    }
  }
};
