const locationReducer = (state = "", action) => {
  switch (action.type) {
    case "LOCATION":
      return action.payload;

    default:
      return state;
  }
};

export default locationReducer;
