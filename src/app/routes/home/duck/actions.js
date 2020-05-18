import types from "./types.js";

const helloWorld = (value) => ({
  type: types.HELLO_WORLD,
  payload: value,
});

const changeName = (value) => ({
  type: types.CHANGE_NAME,
  payload: value,
});

export default {
  helloWorld,
  changeName,
};
