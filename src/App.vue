<template>
  <div class="home">
    <div class="post" v-for="post in posts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{ posts: [] } 
    
  },
  async mounted(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
    const posts =await res.json();
    this.posts = posts;
  }
 
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.post {
  border: 1px solid grey;
}
</style>