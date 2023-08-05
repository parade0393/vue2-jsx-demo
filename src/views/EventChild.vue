<template>
  <van-button type="primary" @click="save">确定</van-button>
</template>
<script>
export default {
  name: "EventChild",
  props: ["click"],
  methods: {
    save() {
      this.$emit("click", "child");
      this.click?.("44678"); //父组件也可以使用:ckick的形式进行传递事件
    },
  },
};
</script>
