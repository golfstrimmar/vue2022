<template>
  <select v-model='modelValue' class="select-common" @change="changeOption">
    <option disabled value="">choose from list</option>
    <option v-for="option in options" :key="option.value" :value="option.value" >{{ option.name}}
    </option>
  </select>
</template>

<script>
export default {
name: 'CommonSelect',
props: {
  modelValue:{
    type: String
  },
  options:{
    type: Array,
    default: () => []
  }
  },
  methods:{
    changeOption(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>

.select-common{
  cursor: pointer;
  margin: 20px 0 0 0;
  border: 2px solid rgb(3, 73, 179);
  padding: 5px;
}
</style>