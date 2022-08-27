<template>
  <div class="post">
    <h3 class="post__title">name: {{ post.title }}</h3>
    <p class="post__description">description: {{ post.description }}</p>
    <SussessButton class="post__button">
    <Cross/>
    </SussessButton>
  </div>
</template>

<script>
import Cross from './svgComponents/Cross.vue'
export default {
  components: {
     Cross
  },
  props: {
    post: {
      reqired: true
    }
  }
}
</script>

<style lang="scss" scoped>




.post {
  border: 1px solid rgb(117, 12, 179);
  border-radius: 3px;
  padding: 5px;
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