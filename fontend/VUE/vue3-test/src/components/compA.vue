<template>
  <div>comp-A</div>
</template>

<script lang="ts">
import { ref } from 'vue'

export type IExpose = {
  age: number
}

export default {
  props: {
    name: { type: String, required: true },
  },
  setup(props, ctx) {
    // props.name
    const age = ref(12)

    ctx.expose({ age })

    return { age }
  },
}
</script>
