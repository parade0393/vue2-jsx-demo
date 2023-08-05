import SlotJsx from "./SlotJsx";
import { Cell } from "vant";
import HJsx from "./HJsx";
import EventJsx from "./EventJsx";
export default {
  components: { SlotJsx, [Cell.name]: Cell, HJsx },
  methods: {
    childHandleClick() {
      console.log("parentHandleClick--parent");
    },
  },
  render() {
    const scopeSlots = {
      header: ({ list }) => {
        return (
          <div>
            {list.map((item) => {
              return (
                <van-cell
                  value={item.type}
                  label={item.title}
                  key={item.title}
                ></van-cell>
              );
            })}
          </div>
        );
      },
      footer: ({ title }) => {
        return <div>{title}</div>;
      },
    };
    return (
      <div>
        <SlotJsx scopedSlots={scopeSlots} />
        <HJsx level={"4"}>
          <div>我是默认插槽的内容</div>
        </HJsx>
        <EventJsx click={this.childHandleClick} />
      </div>
    );
  },
};
