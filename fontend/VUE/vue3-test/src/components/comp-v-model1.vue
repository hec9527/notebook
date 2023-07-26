<template>
  <div>
    <input type="text" v-model="name" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

export type IProps = {
  modelValue: string
}

export type IEmit = {
  (e: 'update:modelValue', data: string): void
}

const props = defineProps<IProps>()
const emit = defineEmits<IEmit>()

const name = computed({
  get() {
    return props.modelValue
  },
  set(name: string) {
    emit('update:modelValue', name)
  },
})
</script>
