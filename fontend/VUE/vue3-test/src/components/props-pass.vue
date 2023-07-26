<template>
  <!-- <div class="container" @click="show()">props 透传</div> -->
  <PropsPass1 @click="show()" />
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'
import PropsPass1 from './props-pass1.vue'

const attr = useAttrs()

console.log(attr)

const show = () => {
  console.log('container click')
}
</script>
