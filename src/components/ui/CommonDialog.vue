<template>
  <div class="common-dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="common-dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods:{
    hideDialog(){
      this.$emit('update:show', false)
    }
  }

}
</script>

<style lang="scss" scoped>

.common-dialog{
  position: fixed;
  min-height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.767);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  &__content{
    background: white;
    border-radius: 15px;
    min-width: 5px;
    min-height: 5px;padding: 40px;

  }
}
</style>