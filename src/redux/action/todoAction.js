import axios from "axios";

export const GET_TODO = "GET_TODO";
export const FETCH_START = "FETCH_START";
export const SUCCESS_GET_TODO = "SUCCESS_GET_TODO";
export const SUCCESS_ADD_TODO = "SUCCESS_ADD_TODO";
export const SUCCESS_DELETE_TODO = "SUCCESS_DELETE_TODO";
export const SUCCESS_UPDATE_TODO = "SUCCESS_DELETE_TODO";
export const SUCCESS_UPDATE_CHECK = "SUCCESS_DELETE_CHECK";

function fetchStart() {
  return {
    type: FETCH_START,
  };
}

function successGetTodo(data) {
  return {
    type: SUCCESS_GET_TODO,
    payload: data,
  };
}

export function getTodo() {
  return async (dispatch) => {
    dispatch(fetchStart());

    const result = await axios.get("https://635b3d50aa7c3f113db88e01.mockapi.io/TodoList");

    dispatch(successGetTodo(result.data));
  };
}

export function successAddTodo(data) {
  console.log(`ini adalah ${data}`);
  return {
    type: SUCCESS_ADD_TODO,
    payload: data,
  };
}

export function addTodo(todo) {
  return async (dispatch) => {
    // alert(todo);
    axios
      .post("https://635b3d50aa7c3f113db88e01.mockapi.io/TodoList", {
        todo: todo,
        isDone: false,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    dispatch(fetchStart());
    const result = await axios.get("https://635b3d50aa7c3f113db88e01.mockapi.io/TodoList");

    dispatch(successAddTodo(result.data));
    location.reload();
  };
}

export function successDeleteTodo(data) {
  console.log("Berhasil");
  return {
    type: SUCCESS_DELETE_TODO,
    payload: data,
  };
}
export function deleteTodo(id) {
  return async (dispatch) => {
    axios
      .delete(`https://635b3d50aa7c3f113db88e01.mockapi.io/TodoList/${id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    dispatch(fetchStart());
    const result = await axios.get("https://635b3d50aa7c3f113db88e01.mockapi.io/TodoList");
    console.log(result.data);

    dispatch(successDeleteTodo(result.data));
    location.reload();
  };
}

export function successUpdateTodo(data) {
  console.log("Berhasil");
  return {
    type: SUCCESS_UPDATE_TODO,
    payload: data,
  };
}

export function updateTodo(id, todo, progress) {
  let boolOutput = progress === "true";
  return async (dispatch) => {
    axios
      .put(`https://635b3d50aa7c3f113db88e01.mockapi.io/TodoList/${id}`, {
        todo: todo,
        isDone: boolOutput,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    dispatch(fetchStart());
    const result = await axios.get("https://635b3d50aa7c3f113db88e01.mockapi.io/TodoList");
    console.log(result.data);

    dispatch(successUpdateTodo(result.data));
    location.reload();
  };
}

// export function getTodoActive()
// export function successUpdateCheck(data) {
//   console.log("Berhasil");
//   return {
//     type: SUCCESS_UPDATE_CHECK,
//     payload: data,
//   };
// }

// export function updateTodoCheck(id, subscribed) {
//   if ((subscribed = false)) {
//     console.log(subscribed);
//   } else {
//     console.log(subscribed);
//   }
//   return async (dispatch) => {
//     axios
//       .put(`https://635b3d50aa7c3f113db88e01.mockapi.io/TodoList/${id}`, {
//         todo: "Halo",
//         isDone: false,
//       })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//     dispatch(fetchStart());
//     const result = await axios.get("https://635b3d50aa7c3f113db88e01.mockapi.io/TodoList");
//     console.log(result.data);

//     dispatch(successUpdateCheck(result.data));
//     location.reload();
//   };
// }
