<template>
  <div class="parent">
    <StyleJsx :title="title" @onChange="handleOnChange" />
  </div>
</template>
<script>
import StyleJsx from "./styleJsx/StyleJsx";
export default {
  components: { StyleJsx },
  data() {
    return {
      title: "from parent",
    };
  },
  methods: {
    handleOnChange(params) {
      console.log("handleOnChange", params);
    },
  },
};
</script>
<style lang="less" scoped>
.parent {
  height: 100%;
}
</style>
