export const weather = (location) => {
  return {
    type: "WEATHER",
    payload: location,
  };
};

export const nav = (index) => {
  return {
    type: "ACTIVE",
    payload: index,
  };
};

export const locationName = (location) => {
  return {
    type: "LOCATION",
    payload: location,
  };
};
