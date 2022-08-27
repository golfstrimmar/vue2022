<template>
  <!-- v-show='posts.length > 0' -->
  <div class="posts" v-for='post in posts' :key="post.id" v-if="posts.length > 0">
    <PostItem :post="post" @remove="$emit('remove', post)"></PostItem>
  </div>
  <!-- v-show='posts.length === 0' -->
  <h3 v-else>
    sory, you have not any posts
  </h3>
</template>

<script>

import PostItem from './PostItem'

export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      reqired: true
    }
  }
}
</script>

<style lang="scss" scoped>
.posts {
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

}

h3 {
  margin: 40px 0 0 0;
  padding: 4px;
  color: red;
  text-align: center;
  background: rgb(252, 193, 137);
  border-radius: 5px;
  border: 1px solid red;
}
</style>