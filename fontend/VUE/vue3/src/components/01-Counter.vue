<template>
  <div class="count-wrap">
    <p v-bind:title="count">count: {{ count }}</p>
    <input type="number" v-model="count" />
    <br />
    <button class="btn" v-on:click="add">add</button>
    <button class="btn" v-on:click="reduce">reduce</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return { count: 0 };
  },
  methods: {
    add() {
      this.count++;
    },
    reduce() {
      this.count--;
    }
  }
};
</script>

<style scoped>
.count-wrap {
  border: 1px solid #f5f5f5;
  padding: 8px 16px;
  border-radius: 8px;
}
input {
  margin-bottom: 10px;
}
.btn {
  padding: 4px 7px;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 4px;
}
</style>
