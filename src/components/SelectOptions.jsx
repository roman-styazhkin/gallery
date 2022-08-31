import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const SelectOptions = ({ onSelectCategory, items, keyName }) => {
  return (
    <div className="select__drowpdown">
      <SimpleBar style={{ maxHeight: 200 }}>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectCategory(item.id, item[keyName])}
            className="select__item"
            type="button">
            {item[keyName]}
          </button>
        ))}
      </SimpleBar>
    </div>
  );
};

export default SelectOptions;
