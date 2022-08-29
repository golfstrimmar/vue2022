<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar__body">
        <div class="logo" @click="$router.push('/')">
          <img src="./../assets/img/logo.png" alt="logo" />
          <span>vue-3</span>
        </div>
        <div class="navbar__buttons">
          <SussessButton @click="$router.push('/')">Home</SussessButton>
          <SussessButton @click="$router.push('/posts')">Posts</SussessButton>
          <SussessButton @click="$router.push('/about')">About</SussessButton>
          <SussessButton @click="$router.push('/store')">Store</SussessButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  background: rgb(221, 221, 221);
  height: 60px;
  box-shadow: 0 2px 8px rgba(124, 124, 124, 0.733);
}
.navbar__buttons {
  display: flex;
  align-items: center;
  column-gap: 20px;
}
.navbar__body {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  cursor: pointer;
  max-width: 40px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  span {
    white-space: nowrap;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
