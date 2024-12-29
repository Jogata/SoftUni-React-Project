import { useContext } from "react";
import { RoomContext } from "./Context";
import { Title } from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
//   console.log(context);

  const {
    handleChange, 
    type, 
    capacity, 
    price, 
    minPrice, 
    maxPrice, 
    minSize, 
    maxSize, 
    breakfast, 
    pets
  } = context;

  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
      </form>
    </section>
  );
};