<template >
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />

  <div class="container">
    <h1>app</h1>
    <div class="buttons">
      <button @click="addLike" class="btn btn--success btn-app">like</button>
      <button @click="adddisLike" class="btn btn--success btn-app">dislike</button>
    </div>
    <div class="buttons">
      <p>likes: <strong>{{ likes }}</strong></p>
      <p>dislikes: <strong>{{ dislikes }}</strong></p>
    </div>


    <div class="posts">
      <div class="post">
        <p class="post__description">name:  js</p>
        <p class="post__description">description: about js</p>
      </div>
      <div class="post">
        <p class="post__description">name:  js</p>
        <p class="post__description">description: about js</p>
      </div>
      <div class="post">
        <p class="post__description">name:  js</p>
        <p class="post__description">description: about js</p>
      </div>
      <div class="post">
        <p class="post__description">name:  js</p>
        <p class="post__description">description: about js</p>
      </div>
    </div>
  </div>



</template>



<script>
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
    }
  },

  methods: {

    addLike() {
      this.likes += 1
    },
    adddisLike() {
      this.dislikes += 1
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
  p{
    font-size: 16px;
  }
}

.btn-app {
  padding: 5px 10px;
  font-size: 18px;
  text-transform: uppercase;
  min-width: 200px;
}

.posts{
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  .post{
    border: 1px solid rgb(117, 12, 179);
    border-radius: 3px;
    padding: 5px;
  }
}




</style>