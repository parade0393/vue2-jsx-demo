<template>
  <div class="home">
    <van-cell
      v-for="(item, index) in list"
      :key="index"
      is-link
      :to="item.path"
      >{{ item.meta.title }}</van-cell
    >
    <StyleJsx title="from parent" />
  </div>
</template>

<script>
import StyleJsx from "./styleJsx/StyleJsx";

export default {
  name: "HomeView",
  components: { StyleJsx },
  computed: {
    list() {
      return this.$router.options.routes.filter((el) => el.name != "home");
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/assets//style/base.less";
</style>
