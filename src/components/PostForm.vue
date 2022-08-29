<template>
  <form class="form-posts" @submit.prevent>
    <CommonInput  placeholder="post title" v-focus v-model.trim="post.title" />
    <CommonInput placeholder="post description" v-model.trim="post.body" />
    <SussessButton @click="createPost">add post</SussessButton>
  </form>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      post: {
        title: '',
        description: '',
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now(),
        this.$emit('create', this.post)
      this.post = {
        title: '',
        description: ''
      }

    },
  }

}
</script>

<style lang="scss" scoped>
.form-posts {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 10px;


}
</style>