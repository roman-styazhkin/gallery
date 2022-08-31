import React from "react";
import { ResetFilter } from "./";

const Select = ({ children, selectItem, category }) => {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeValue, setActiveValue] = React.useState(null);
  const selectRef = React.useRef();
  const style = { borderRadius: visiblePopup ? "8px 8px 0 0" : "8px 8px 8px 8px" };

  const onToggleCategory = () => {
    setVisiblePopup(!visiblePopup);
  };

  const onClickOutside = (e) => {
    e.stopPropagation();
    if (!e.composedPath().includes(selectRef.current)) {
      setVisiblePopup(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", onClickOutside);
  }, []);

  const onSelectCategory = (currentItem, activeSelect) => {
    selectItem(category, currentItem);
    setVisiblePopup(false);
    setActiveValue(activeSelect);
  };

  const onResetCategory = () => {
    selectItem(category, null);
    setActiveValue(null);
  };

  return (
    <div ref={selectRef} className="filter__category select" style={style}>
      {activeValue && <ResetFilter onResetCategory={onResetCategory} />}
      <div className="select__value" onClick={onToggleCategory}>
        {activeValue || category}
      </div>
      {visiblePopup &&
        React.Children.map(children, (child) => React.cloneElement(child, { onSelectCategory }))}
    </div>
  );
};

export default Select;
