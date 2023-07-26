<template>
  <div class="hello" :style="{ fontSize: '18px', 'font-weight': 500 }">hello 111</div>
  <div
    class="hello"
    :class="$attrs.class"
    :style="{ WebkitTapHighlightColor: '#ff0' }"
    @click="count++"
  >
    hello 222
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

export type IExpose = {
  count: number
  name: string
}

defineExpose({
  count,
  name: 'saga',
})
</script>
