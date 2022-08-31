import { useDispatch } from "react-redux";
import { setQuery } from "../redux/actions/filters";
import Utils from "../services/Utils";

const SearchInput = () => {
  const dispatch = useDispatch();
  const { debounce } = new Utils();
  const search = (value) => {
    dispatch(setQuery(value));
  };

  return (
    <input
      onChange={debounce((e) => search(e.target.value))}
      className="filter__search select"
      type="text"
      placeholder="Name"
    />
  );
};

export default SearchInput;
