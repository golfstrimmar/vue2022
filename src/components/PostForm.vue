<template>
  <form class="form-posts" @submit.prevent>
    <input type="text" placeholder="post title" v-model="post.title" />
    <input type="text" placeholder="post description" v-model="post.description" />
    <SussessButton>add post</SussessButton>
  </form>
</template>

<script>
export default {
  components:{
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

  input {
    border: 1px solid grey !important;
    padding: 5px !important;
  }
}
</style>