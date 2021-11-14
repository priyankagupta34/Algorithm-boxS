const initialState = {
  search: "",
  allDefs: [],
  model_open: false,
  model_src: "",
  rotate_img: "0"
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
        model_src: payload,
        rotate_img: "0"
      };
    case "ROTATE_IMAGE":
      return {
        ...prevState,
        rotate_img: prevState.rotate_img === "0" ? "90" : "0"
      };
    default:
      return { ...prevState };
  }
}
