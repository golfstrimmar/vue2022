<template>
  <div class="inner">
    <div class="app__body">
      <h1>posts page</h1>
      <h2>{{  $store.state.isAuth? 'logined': 'shood login'  }}</h2>
      <h1>{{$store.state.likes}}</h1>
      <h1>{{$store.getters.doubleLikes}}</h1>
      <SussessButton @click="$store.commit('incrementLikes')">like</SussessButton>
      <SussessButton @click="$store.commit('decrementLikes')">dislike</SussessButton>
      <CommonInput placeholder="search" v-model.trim="searchQuery" />
      <!-- <SussessButton @click="fetchPosts" class="dialog-open-button">resive post</SussessButton> -->
      <div class="block-buttons">
        <SussessButton @click="showDialog" class="dialog-open-button">create post</SussessButton>
        <CommonSelect v-model="selectedSort" :options="sortOptions"></CommonSelect>
      </div>

      <CommonDialog v-model:show="dialogVisible">
        <PostForm @create="createPost"></PostForm>
      </CommonDialog>

      <!-- <PostList :posts="posts" @remove="RemovePost"></PostList> ======== watch ========-->
      <!-- <PostList :posts="sortedPosts" @remove="RemovePost"></PostList> ======== computed ======== -->
      <PostList :posts="SortedAndCearchesedPosts" @remove="RemovePost"></PostList>
      <div v-intersection="loadMorePosts" class="observer"></div>
      <!-- <div class="page-wrapper">
        <div
          class="page"
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          :class="{
            'current-page': page == pageNumber,
          }"
          @click="changePage(pageNumber)"
        >
          {{ pageNumber }}
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";
import SussessButton from "@/components/ui/SussessButton.vue";

export default {
  components: {
    PostForm,
    PostList,
    SussessButton
},
  data() {
    return {
      posts: [],
      dialogVisible: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "for name" },
        { value: "body", name: "for description" },
      ],
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    RemovePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    //   this.fetchPosts();
    // },
    async fetchPosts() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        });
        this.totalPages = Math.ceil(response.headers["x-total-count"] / this.limit);
        this.posts = response.data;
      } catch {
        alert("misstake");
      }
    },
    async loadMorePosts() {
      this.page += 1;
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        });
        this.totalPages = Math.ceil(response.headers["x-total-count"] / this.limit);
        this.posts = [...this.posts, ...response.data];
      } catch {
        alert("misstake");
      }
    },
  },
  mounted() {
    this.fetchPosts();
    // var options = {
    //   rootMargin: "0px",
    //   threshold: 1.0,
    // };
    // var callback = (entries, observer) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts();
    //   }
    // };
    // var observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer);
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    SortedAndCearchesedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },

  // watch:{
  //   selectedSort(newValue){
  //     this.posts.sort((post1,post2) => {
  //       return post1[newValue]?.localeCompare(post2[newValue])
  //     })
  //   }
  // }
};
</script>

<style lang="scss">
.block-buttons {
  display: flex;
  justify-content: space-between;
}

h1 {
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: "DrukCyr", serif;
}

.buttons {
  display: flex;
  column-gap: 10px;
  margin: 0 0 20px 0;

  p {
    font-size: 16px;
  }
}

.dialog-open-button {
  margin: 20px 0 0 0;
}

.app__body {
  margin: 0 0 50px 0;
}

.page-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, 40px);
  align-items: center;
  margin: 15px 0 0 0;
}

.page {
  border: 1px solid rgb(39, 39, 39);
  min-height: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.current-page {
  border: 2px solid rgb(39, 39, 39);
  background: beige;
}

.observer {
}
</style>
