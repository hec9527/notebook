<template>
  <div>
    <p>name: <input type="text" v-model="name" /></p>
    <p>age: <input type="number" v-model="age" /></p>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

type Modifiers = { [K in 's' | 'a' | 'trim']: boolean }

export type IProps = {
  name: string
  age: number
  nameModifiers: Modifiers
  ageModifiers: Modifiers
}

export type IEmit = {
  (e: 'update:name', data: string): void
  (e: 'update:age', data: number): void
}

const props = withDefaults(defineProps<IProps>(), {
  ageModifiers: () => ({} as Modifiers),
  nameModifiers: () => ({} as Modifiers),
})
const emit = defineEmits<IEmit>()

const name = computed({
  get() {
    return props.name
  },
  set(name: string) {
    console.log('nameModifies', props.nameModifiers)
    if (props.nameModifiers?.trim) {
      name = name.trim()
      console.log(name)
    }

    emit('update:name', name)
  },
})

const age = computed({
  get() {
    return props.age
  },
  set(age: number) {
    emit('update:age', age)
  },
})

console.log(props)
</script>
