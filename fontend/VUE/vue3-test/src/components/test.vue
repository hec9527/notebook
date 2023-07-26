<template>
  <div>
    <!--  -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    msg: { type: String, required: true },
  },
  emits: ['count'],
  beforeCreate() {},

  beforeRouteEnter() {},
  beforeRouteUpdate() {},
  beforeMount() {},

  beforeRouteLeave() {},
  beforeUnmount() {},
  beforeUpdate() {},
  data() {
    return { name: 'sag' }
  },
  setup() {
    const name1 = ref('sgag')
    return { name1 }
  },
  created() {
    console.log(this)
    this.$data.name
    this.name1
  },
  mounted() {
    console.log(this)
  },
  updated() {
    console.log(this)
  },
  unmounted() {
    console.log(this)
  },
  activated() {
    console.log(this)
  },
})
</script>
