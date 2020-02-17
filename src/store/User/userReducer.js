import USER_TYPE from "./userType";

const defaultState = () => ({
  userList: [],
  randomUser: ""
});

export default function appReducer(state = defaultState(), action) {
  switch (action.type) {
    case USER_TYPE.SET_USER_NAME: {
      return {
        ...state,
        userList: [...state.userList, action.payload]
      };
    }

    case USER_TYPE.REMOVE_USER: {
      return {
        ...state,
        userList: state.userList.filter(user => user !== action.payload)
      };
    }

    case USER_TYPE.SELECT_RANDOM_USER: {
      console.log(
        "random",
        state.userList[Math.floor(Math.random() * state.userList)]
      );
      return {
        ...state,
        randomUser:
          state.userList[Math.floor(Math.random() * state.userList.length)] ||
          state.userList[0]
      };
    }

    default:
      return state;
  }
}
