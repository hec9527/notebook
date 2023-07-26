<template>
  <fieldset>
    <legend>祖先</legend>
    <Father />
  </fieldset>
</template>

<script lang="ts" setup>
import { provide } from 'vue'
import Father from './father.vue'

provide('ancestor', "hello I'am your ancestor")
</script>
