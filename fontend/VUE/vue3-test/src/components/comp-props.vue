<template>
  <div>name: {{ name }}</div>
  <div>age: {{ age }}</div>

  <button @click="$emit('increase')">increase</button>
  <button @click="$emit('decrease', 10)">decrease</button>
  <hr />
  <slot />
</template>

<script lang="ts" setup>
export type IProps = {
  name: string
  age: number
}

export type IEmit = {
  (e: 'increase', step?: number): void
  (e: 'decrease', step?: number): void
}

const props = withDefaults(defineProps<IProps>(), {
  name: 'tony',
  age: 0,
})

// defineEmits(['increase'])

const emit = defineEmits<IEmit>()

const slots = defineSlots()

// console.log(props, emit, slots)

emit('increase', 60)
</script>
