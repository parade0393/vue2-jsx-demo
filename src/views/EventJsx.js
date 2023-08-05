import { Button } from "vant";
export default {
  components: { [Button.name]: Button },
  methods: {
    childHandleClick() {
      console.log("childHandleClick");
    },
  },
  render() {
    return <div style={{ margin: "16px" }}>按钮</div>;
  },
};
