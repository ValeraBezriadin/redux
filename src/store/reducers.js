import { combineReducers } from "redux";

const initialState = {
  count: 0,
};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      const incrementState = { ...state, count: state.count + 1 };
      console.log(state);
      return incrementState;

    case DECREMENT:
      const decrementState = { ...state, count: state.count - 1 };
      console.log(state);
      return decrementState;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  count: countReducer,
});
export default rootReducer;
