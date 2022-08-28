<template>
  <!-- v-show='posts.length > 0' -->
  <div class="posts" v-if="posts.length > 0">
    <h2>posts list</h2>
    <transition-group name="posts-list">
      <PostItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>

  <!-- v-show='posts.length === 0' -->
  <h3 v-else>sory, you have not any posts</h3>
</template>

<script>
import PostItem from "./PostItem";

export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
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
.posts-list-item {
  display: inline-block;
  margin-right: 10px;
}

.posts-list-enter-active,
.posts-list-leave-active {
  transition: all 0.3s ease;
}

.posts-list-enter-from,
.posts-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.posts-list-move {
  transition: transform 0.4s ease;
}
</style>
