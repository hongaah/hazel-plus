<template>
  <hz-dropdown-select
    v-model:selected="selected"
    :selectOption="selectOption"
  ></hz-dropdown-select>
</template>

<script setup lang="ts">
  // import { HzDropdownSelect } from '../../index'
  import { HzDropdownSelect } from 'hazel-plus'
  import { ref } from 'vue'

  const selected = ref('carrot')

  const selectOption = [
    {
      label: '萝卜',
      value: 'carrot',
    },
    {
      label: '青菜',
      value: 'vegetarian',
    },
    {
      label: '各有所爱',
      value: 'whatever',
    },
  ]
</script>
