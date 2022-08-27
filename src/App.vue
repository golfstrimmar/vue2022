<template >
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />

  <div class="container">
    <h1>posts page</h1>
    <!-- <SussessButton @click="fetchPosts" class="dialog-open-button">resive post</SussessButton> -->
    <div class="block-buttons">
      <SussessButton @click="showDialog" class="dialog-open-button">create post</SussessButton>
      <CommonSelect v-model="selectedSort" :options="sortOptions"></CommonSelect>
    </div>



    <CommonDialog v-model:show="dialogVisible">
      <PostForm @create="createPost"></PostForm>
    </CommonDialog>

    <PostList :posts="posts" @remove="RemovePost"></PostList>

  </div>



</template>



<script>

import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from 'axios'

export default {
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      selectedSort:'',
      sortOptions: [
        {value: 'title', name: 'for name'},
        {value: 'body', name: 'for description'}
      ]
    }
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false
    },
    RemovePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
    async fetchPosts() {
      try {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = responce.data
      } catch {
        alert('misstake')
      }
    }

  },
  mounted(){
    this.fetchPosts()
  }


}

</script>


<style lang="scss">
.block-buttons{
  display: flex;
  justify-content: space-between;
}
h1 {
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'DrukCyr', serif;
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
</style>