export default {
  state: {
    posts: [],
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    async fetchPosts(ctx, limit=3) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
      );
      const posts = await res.json();
      this.posts = posts;
      ctx.commit("updatePosts", posts);
    },
    
  },
};
