import SlotJsx from "./SlotJsx";
import { Cell } from "vant";
export default {
  components: { SlotJsx, [Cell.name]: Cell },
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
      </div>
    );
  },
};
