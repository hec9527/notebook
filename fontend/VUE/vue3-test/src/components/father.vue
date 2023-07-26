<template>
  <fieldset>
    <legend>父级</legend>
    <Son :msg="msg" />
  </fieldset>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Son from './son.vue'

const msg = ref('this is from father')
</script>
