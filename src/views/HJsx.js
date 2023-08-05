export default {
  props: {
    level: String,
  },
  render() {
    const tag = `h${this.level}`;
    return (
      <div>
        <tag>{this.$slots.default}</tag>
      </div>
    );
  },
};
