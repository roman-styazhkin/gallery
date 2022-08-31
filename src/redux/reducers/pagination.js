const initialState = {
  activePage: 0,
};

const pagination = (state = initialState, action) => {
  if (action.type === "SET_ACTIVE_PAGE") {
    return {
      ...state,
      activePage: action.payload,
    };
  }

  return state;
};

export default pagination;
