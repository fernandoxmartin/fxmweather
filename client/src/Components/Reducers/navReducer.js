const initialState = [
  { active: true },
  { active: false },
  { active: false },
  { active: false },
];

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTIVE": {
      const resetState = [
        { active: false },
        { active: false },
        { active: false },
        { active: false },
      ];

      return Object.assign([], resetState, {
        [action.payload]: Object.assign(
          {},
          {
            active: true,
          }
        ),
      });
    }

    default:
      return state;
  }
};

export default navReducer;
