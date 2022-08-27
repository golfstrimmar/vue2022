<template>
  <button type=" submit" class="btn btn--success " @click="createPost"><slot></slot></button>
</template>

<script>

export default {
  name: 'SussessButton'
}
</script>

<style lang="scss" scoped>



.btn {
  border: 1px solid transparent;
  outline: none;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.btn--success {
  color: white;
  border-radius: 10px;
  background: #1130e24b;

  &:hover {
    box-shadow: 0 10px 20px rgba(134, 172, 241, 0.5), inset 0 0 15px rgba(255, 255, 255, 1);
  }
}


button {
  background: rgba(3, 51, 209, 0.664);
    padding: 5px 10px;
    font-size: 18px;
    text-transform: uppercase;
  svg {
    width: 15px;
    height: 15px;
    fill: white;
  }
}
</style>