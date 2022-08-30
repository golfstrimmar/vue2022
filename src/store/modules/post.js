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
    async fetchPosts(ctx) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=3"
      );
      const posts = await res.json();
      this.posts = posts;
      ctx.commit("updatePosts", posts);
    },
    
  },
};
