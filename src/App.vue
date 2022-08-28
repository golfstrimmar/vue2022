<template>
  <Navbar></Navbar>

  <div class="container">
    <!-- <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/posts">Posts</router-link>
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
// nav {
//   margin: 10px 0 40px 0;
// }
// nav a {
//   border: 1px solid grey;
//   padding: 5px;
// }
</style>
