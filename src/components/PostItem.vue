<template>
  <div class="post">
    <div class="">{{ post.id }}</div>
    <h3 class="post__title">name: {{ post.title }}</h3>
    <p class="post__description">description: {{ post.body }}</p>
    <SussessButton class="post__button" @click="$emit('remove', post)">
      <Cross />
    </SussessButton>
  </div>
</template>

<script>
import Cross from "./svgComponents/Cross.vue";
export default {
  components: {
    Cross,
  },
  props: {
    post: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  border: 1px solid rgb(117, 12, 179);
  border-radius: 3px;
  padding: 5px 40px 5px 15px;
  position: relative;
}
.post__button {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
  padding: 0 0 0 0;
  svg {
    width: 15px;
    height: 15px;
    fill: white;
  }
}
</style>
