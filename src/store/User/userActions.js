import store from "../index";
import USER_TYPE from "./userType";

const { dispatch } = store;

export const setUsername = name => {
  //   let user = {
  //     firstName,
  //     lastName
  //   };
  dispatch({ type: USER_TYPE.SET_USER_NAME, payload: name });
};

export const removeUser = user => {
  dispatch({
    type: USER_TYPE.REMOVE_USER,
    payload: user
  });
};

export const selectRandomUser = () => {
  dispatch({
    type: USER_TYPE.SELECT_RANDOM_USER
  });
};
