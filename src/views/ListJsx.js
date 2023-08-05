import { Cell } from "vant";
export default {
  name: "ListJsx",
  components: { [Cell.name]: Cell },
  data() {
    return {
      list: [
        {
          id: 1,
          label: "姓名",
          name: "henry",
        },
        {
          id: 2,
          label: "姓名",
          name: "Jerry",
        },
      ],
    };
  },
  render() {
    const { list } = this;
    const ListItem = {
      name: "ListItem",
      components: { [Cell.name]: Cell },
      render() {
        return (
          <ul>
            {[1, 2, 3, 4, 5].map((el) => {
              return <van-cell title={`第${el}个`} value={el}></van-cell>;
            })}
          </ul>
        );
      },
    };
    return (
      <div>
        {list.map((el) => {
          return <van-cell title={el.label} value={el.name}></van-cell>;
        })}
        <ListItem />
      </div>
    );
  },
};
