import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import Thunk from "redux-thunk";
import todoReducer from "../reducer/todoReducer";

const allReducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(allReducer, applyMiddleware(Thunk));

export default store;
