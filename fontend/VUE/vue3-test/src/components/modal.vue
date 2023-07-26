<template>
  <Teleport to="body" v-if="$props.visible">
    <div class="model-mask" />
    <div class="model-content">
      <div class="header">Header</div>
      <div class="main">Main</div>
      <div class="footer">
        <button @click="$emit('close')">close</button>
        <button @click="$props.closeIt()">my close</button>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

type IProps = {
  visible: boolean
  closeIt(): void | undefined
}

type IEmit = {
  (e: 'close'): void
}

const data = ref(0)

const emit = defineEmits<IEmit>()

withDefaults(defineProps<IProps>(), { visible: false })

defineExpose({
  close: () => emit('close'),
  getData: () => data.value,
})
</script>

<style>
.model-mask {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #0004;
}

.model-content {
  position: absolute;
  width: 400px;
  height: 300px;
  border-radius: 4px;
  background-color: #fff;
  right: 0;
  left: 0;
  top: calc(50% - 300px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.header {
  border-bottom: 1px solid #eee;
  padding: 12px 0;
  text-align: center;
  font-size: 18px;
}

.main {
  flex: 1;
}

.footer {
  border-top: 1px solid #eee;
  padding: 12px 0;
  display: flex;
  justify-content: flex-end;
}
</style>
