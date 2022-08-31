import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { setMax, setMin } from "../redux/actions/filters";

const RangeDropdown = ({ min, max }) => {
  const dispatch = useDispatch();

  return (
    <div className="select__drowpdown">
      <div className="range">
        <input
          onChange={(e) => dispatch(setMin(e.target.value || null))}
          className="range__input"
          type="number"
          min={1000}
          name="min"
          required
          placeholder="from"
          value={min || ""}
        />
        <input
          onChange={(e) => dispatch(setMax(e.target.value || null))}
          className="range__input"
          type="number"
          name="max"
          required
          placeholder="before"
          value={max || ""}
        />
      </div>
    </div>
  );
};

export default RangeDropdown;
