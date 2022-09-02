<template>
  <div>
    <!-- TypeNav是全局组件，无需引入 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
// import TypeNav from "@/pages/Home/TypeNav/index";
import ListContainer from "@/pages/Home/ListContainer/index";
import Recommend from "@/pages/Home/Recommend/index";
import Rank from "@/pages/Home/Rank/index";
import Like from "@/pages/Home/Like/index";
import Floor from "@/pages/Home/Floor/index";
import Brand from "@/pages/Home/Brand/index";

import { mapState } from "vuex";
// import { store } from '/@/shared/store';
export default {
  name: "Home",
  data() {
    return {};
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  // methods方法
  methods: {
    addCount() {
      this.$store.dispatch("add");
    },
  },
  components: {
    // TypeNav,
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  computed: {
    ...mapState(["count"]),
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
