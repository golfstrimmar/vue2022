<template>
  <input :value="modelValue" @input="updateInput" class="common-input" type="text">
</template>

<script>
export default {
 name: 'CommonInput',
 props:{
  modelValue: [String, Number]
 },
 methods:{
   updateInput(event){
     this.$emit('update:modelValue', event.target.value )
   }
 }
}
</script>

<style lang="scss" scoped>


 input.common-input {
   border: 1px solid grey !important;
   border-radius: 5px;
   padding: 5px !important;
 }
</style>