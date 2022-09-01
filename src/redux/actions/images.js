export const setImages = (images) => ({
  type: "SET_IMAGES",
  payload: images,
});

export const setLoading = (payload) => ({
  type: "SET_LOADING",
  payload,
});
