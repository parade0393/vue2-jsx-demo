<template>
  <div class="parent">
    <StyleJsx :title="title" @onChange="handleOnChange" />
    <EventChild @click="handleBtnClick" />
  </div>
</template>
<script>
import StyleJsx from "./styleJsx/StyleJsx";
import EventChild from "./EventChild.vue";
export default {
  components: { StyleJsx, EventChild },
  data() {
    return {
      title: "from parent",
    };
  },
  methods: {
    handleOnChange(params) {
      console.log("handleOnChange", params);
    },
    handleBtnClick(params) {
      console.log("handleBtnClick", params);
    },
  },
};
</script>
<style lang="less" scoped>
.parent {
  height: 100%;
}
</style>
