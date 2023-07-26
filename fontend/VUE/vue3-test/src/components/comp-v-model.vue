<template>
  <div>title from props : {{ props.title }}</div>
  <div>
    age from props:
    <input
      type="number"
      :value="modelValue"
      @input="$emit('update:modelValue', +($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script lang="ts" setup>
export type IProps = {
  title: string
  modelValue: number
}

export type IEmit = {
  (e: 'update:modelValue', data: number): void
}

const props = withDefaults(defineProps<IProps>(), { title: 'hello' })

console.log(props)

defineEmits<IEmit>()
</script>
