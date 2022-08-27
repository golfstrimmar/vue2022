<template >
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />

  <div class="container">
    <h1>posts page</h1>

    <SussessButton @click="showDialog" class="dialog-open-button">create post</SussessButton>
    <!-- <div class="buttons">
      <button @click="addLike" class="btn btn--success btn-app">like</button>
      <button @click="adddisLike" class="btn btn--success btn-app">dislike</button>
    </div>
    <div class="buttons">
      <p>likes: <strong>{{ likes }}</strong></p>
      <p>dislikes: <strong>{{ dislikes }}</strong></p>
    </div> -->
    <CommonDialog v-model:show="dialogVisible">
      <PostForm @create="createPost"></PostForm>
    </CommonDialog>

    <PostList :posts="posts" @remove="RemovePost"></PostList>

  </div>



</template>



<script>

import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";


export default {
  components:{
    PostForm, PostList
  },
  data() {
    return {
      posts: [
        { id: 0, title: 'post0 title', description: 'post0 descr' },
        { id: 1, title: 'post1 title', description: 'post1 descr' },
        { id: 2, title: 'post2 title', description: 'post2 descr' },
        { id: 3, title: 'post3 title', description: 'post3 descr' },
      ],
      dialogVisible: false
    }
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false
    },
    RemovePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog(){
      this.dialogVisible = true
    }

    }


    }

</script>


<style lang="scss">
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

.dialog-open-button{
  margin: 20px 0 0 0;
}




</style>