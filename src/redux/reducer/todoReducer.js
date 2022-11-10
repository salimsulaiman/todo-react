import {
  FETCH_START,
  SUCCESS_ADD_TODO,
  SUCCESS_DELETE_TODO,
  SUCCESS_GET_TODO,
  SUCCESS_UPDATE_CHECK,
  SUCCESS_UPDATE_TODO,
} from "../action/todoAction";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_GET_TODO:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
      };
    case SUCCESS_ADD_TODO:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
      };
    case SUCCESS_DELETE_TODO:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
      };
    case SUCCESS_UPDATE_TODO:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
      };
    // case SUCCESS_UPDATE_CHECK:
    //   return {
    //     ...state,
    //     todos: action.payload,
    //     isLoading: false,
    //   };
    default:
      return state;
  }
};

export default todoReducer;
