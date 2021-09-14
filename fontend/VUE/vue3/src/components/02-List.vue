<template>
  <div class="list-wrap">
    <ol>
      <li v-for="(item, index) in list" v-bind:key="item">
        <span v-if="index % 2 == 0">{{ item }}</span>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data: () => ({
    list: ['吃饭', '睡觉', '打豆豆', '发工资']
  })
};
</script>

<style scoped>
.list-wrap {
  display: flex;
}

.list-wrap ol {
  margin: 0 auto;
  width: auto;
}
.list-wrap ol li {
  min-width: 200px;
}
</style>
