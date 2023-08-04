<template>
  <div class="home">
    <van-cell
      v-for="(item, index) in list"
      :key="index"
      is-link
      :to="item.path"
      >{{ item.meta.title }}</van-cell
    >
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
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
