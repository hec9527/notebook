<template>
  <fieldset>
    <legend>子组件</legend>
    <div>全局提供内容: {{ global }}</div>
    <div>welcome 组件提供内容: {{ data?.msg }} {{ data?.name }} {{ data?.age }}</div>
    <div>祖先元素提供内容： {{ ancestor }}</div>
    <div>父级通过props传递内容: {{ $props.msg }}</div>
    <div>未提供内容的默认值: {{ defaultValue }}</div>
  </fieldset>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

type IData = {
  msg: string
  name: string
  age: string
}

defineProps({
  msg: { type: String, required: true },
})

const data = inject<IData>('test')
const global = inject<string>('global')
const ancestor = inject<string>('ancestor')
const defaultValue = inject<string>('defaultValue', 'this is default value')
</script>
