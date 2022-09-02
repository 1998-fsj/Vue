<template>
  <div>
    Search
     <h3>params---{{ $route.params.keyword }}</h3>
     <h3>query---{{ $route.query.k }}</h3>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {};
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  // methods方法
  methods: {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
