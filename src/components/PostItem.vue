<template>
  <div class="post">
    <div class="post__id">{{ post.id }}</div>
    <h3 class="post__title"><span>name:</span> {{ post.title }}</h3>
    <p class="post__description"><span>description:</span> {{ post.body }}</p>
    <SussessButton class="post__button-open" @click="$router.push(`/posts/${post.id}`)">
      Open
    </SussessButton>
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
  padding: 5px 15px 5px 15px;
  position: relative;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 20px 1fr 60px 25px;
  column-gap: 20px;
  grid-template-areas:
    "a b c e"
    "a d c e";

  .post__id {
    grid-area: a;
  }

  span {
    color: darkblue;
    font-size: 16px;
    font-weight: 800;
    text-transform: uppercase;
  }

  h3 {
    grid-area: b;
  }

  p {
    grid-area: d;
  }

  .post__button-open {
    grid-area: c;
    padding: 5px;
    font-size: 14px;
  }

  .post__button {
    grid-area: e;
  }
}

.post__button {
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
