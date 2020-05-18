import types from "./types";

const INITIAL_STATE = {
  helloWorld: "Hello World",
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.HELLO_WORLD: {
      return {
        ...state,
      };
    }
    case types.CHANGE_NAME: {
      const name = action.payload;
      return {
        ...state,
        helloWorld: name,
      };
    }
    default:
      return state;
  }
};

export default homeReducer;
