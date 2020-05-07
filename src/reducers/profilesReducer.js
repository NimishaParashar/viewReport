const profileIntialState = [];
const profilesReducer = (state = profileIntialState, action) => {
  switch (action.type) {
    case "SET_PROFILE": {
      return [...action.payload];
    }
    default: {
      return [...state];
    }
  }
};

export default profilesReducer;
