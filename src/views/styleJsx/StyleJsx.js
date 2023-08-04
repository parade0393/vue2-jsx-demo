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
  render() {
    const { title } = this;
    return (
      <div
        class="style-jsx"
        style={{ color: "#ff0000", backgroundColor: "#eee", height: "100%" }}
      >
        <p class="title">我是Hello World</p>
        <p>{title || "子组件默认值"}</p>
      </div>
    );
  },
};
