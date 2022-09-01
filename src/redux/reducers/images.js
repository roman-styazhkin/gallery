const initialState = {
  images: [],
  loading: true,
};

const images = (state = initialState, action) => {
  if (action.type === "SET_IMAGES") {
    return {
      ...state,
      images: action.payload,
    };
  }

  if (action.type === "SET_LOADING") {
    return {
      ...state,
      loading: action.payload,
    };
  }

  return state;
};

export default images;
