export default {
  data() {
    return {
      list: [
        {
          title: "测试标题1",
          type: "主题",
        },
        {
          title: "测试标题2",
          type: "故事",
        },
      ],
      company: "世界童话公司",
    };
  },
  render() {
    const { list, company } = this;
    return (
      <div>
        <header>{this.$scopedSlots.header?.({ list })}</header>
        {this.$scopedSlots.default?.()}
        <footer>
          {this.$scopedSlots.footer?.({
            title: company,
          })}
        </footer>
      </div>
    );
  },
};
