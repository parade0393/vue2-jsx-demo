//css引入不能使用scope的形式，因此根元素class保持唯一吧
import "./StyleJsx.less";
export default {
  name: "StyleJsx",
  props: {
    title: String,
  },
  data() {
    return {};
  },
  methods: {
    handleClick(event, id) {
      console.log("handleClick:", event, id);
      this.$emit("onChange", { id });
    },
  },
  render() {
    const { title, handleClick } = this;
    return (
      <div
        class="style-jsx"
        style={{ color: "#ff0000", backgroundColor: "#eee", height: "100%" }}
      >
        <p onClick={($event) => handleClick($event, 14)} class="title">
          我是Hello World
        </p>
        <p>{title || "子组件默认值"}</p>
      </div>
    );
  },
};
