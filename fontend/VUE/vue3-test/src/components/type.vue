<template>
  <div>
    {{ $props.name }}
  </div>

  <div ref="el" v-if="!hide">content</div>

  <button @click="hide = !hide">click</button>
</template>

<script lang="ts" setup>
import { computed, onMounted, provide, reactive, ref, watch, type Ref } from 'vue'

type IProps = { name: string }

type IType = { name: string; age: number }

defineProps<IProps>()

const hide = ref(false)

// const _ref = ref<IType>()
// const _ref: Ref<IType> = ref()

// const _reactive = reactive<IType>({} as any)
// const _reactive: IType = reactive({} as any)

// const res = computed<string>(() => '1')

// const handler = (e: Event) => {
//   const el = e.target as HTMLDivElement
//   el.classList
// }

provide<string, number>(1, 'Vite')

const el = ref<HTMLDivElement>()

onMounted(() => {
  console.log('mounted:', el.value)
})

watch(
  hide,
  () => {
    console.log('update', el.value)
  },
  {
    flush: 'post',
  },
)
</script>
