<template>
  <form @submit.prevent="submit">
    <input type="text"  v-model="title" placeholder="title">
    <input type="text"  v-model="body" placeholder="body">
    <button class="button-submit" type="submit"> create post</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    msg: String
  },
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    ...mapMutations(['createPost']),
    submit() {
      this.createPost({
        title: this.title,
        body: this.body,
        id: Date.now()
      })
      this.title = this.body = '';

    }
  }

}
</script>

<style scoped>
form {
  display: flex;
  column-gap: 20px;
  justify-content: center;
}

.button-submit {
  background: chocolate;
  color: cornsilk;
  padding: 3px 5px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
