<template>
  <div class="posts" v-for='post in posts' :key="post.id">
    <PostItem :post="post"></PostItem>
  </div>
</template>

<script>

import PostItem from './PostItem'

export default {
  components:{
    PostItem
  },
  props:{
    posts:{
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

</style>