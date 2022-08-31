const initialState = {
  authorId: null,
  locationId: null,
  q: null,
  created_gte: null,
  created_lte: null,
};

const filters = (state = initialState, action) => {
  if (action.type === "SET_AUTHOR") {
    return {
      ...state,
      authorId: action.payload,
    };
  }

  if (action.type === "SET_LOCATION") {
    return {
      ...state,
      locationId: action.payload,
    };
  }

  if (action.type === "SET_QUERY") {
    return {
      ...state,
      q: action.payload,
    };
  }

  if (action.type === "SET_MIN") {
    return {
      ...state,
      created_gte: action.payload,
    };
  }

  if (action.type === "SET_MAX") {
    return {
      ...state,
      created_lte: action.payload,
    };
  }

  return state;
};

export default filters;
