import { combineReducers } from "redux";
import filtersReducer from "./filters";
import paginationReducer from "./pagination";

const rootReducer = combineReducers({
  filters: filtersReducer,
  pagination: paginationReducer,
});

export default rootReducer;
