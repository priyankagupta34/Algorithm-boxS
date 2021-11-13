const initialState = {
  search: "",
  allDefs: [],
  model_open: false,
  model_src: ""
};

export default function reducer(prevState = initialState, { type, payload }) {
  switch (type) {
    case "SEARCH":
      return {
        ...prevState,
        search: payload
      };
    case "ALLDEFS":
      return {
        ...prevState,
        allDefs: [...payload]
      };
    case "MODEL_OPEN":
      return {
        ...prevState,
        model_open: !prevState.model_open,
        model_src: payload
      };
    default:
      return { ...prevState };
  }
}
