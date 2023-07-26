<template>
  <div v-on:click="emit('show', 3)">comp-B</div>
</template>

<script setup lang="ts">
export type IEmit = {
  (e: 'show', data: number): void
  (e: 'hide', data: string): void
}

const emit = defineEmits<IEmit>()

emit('show', 1)

emit('hide', '2')
</script>
