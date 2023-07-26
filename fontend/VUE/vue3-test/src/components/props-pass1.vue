<template>
  <div @click="show()" class="inner">innter html</div>
</template>

<script setup lang="ts">
const show = () => {
  console.log('inner click')
}

defineOptions({
  inheritAttrs: false,
})
</script>
