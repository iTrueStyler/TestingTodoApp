import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = (page) => (dispatch) => {
  axios.get(`${BASE_URL}?_limit=4&_${page !== null?`page=${page}`:''}`).then(({ data }) => {
    dispatch(setTodos(data));
  });
};

export const setTodos = (items) => ({
  type: "SET_TODOS",
  payload: items,
});

export const deleteTodos = (id) => (dispatch) => {
  axios.delete(`${BASE_URL}/${id}`).then(({ data }) => {
    console.log(data);
    dispatch(cleanTodo(id));
  });
};
//json placeholder при запросе на удаление возвращает пустой обьект и 200 ответ

export const cleanTodo = (id) => ({
  type: "CLEAN_TODO",
  payload: id,
});

export const completeTodo = (id) => ({
  type: "COMPLETE_TODO",
  payload: id,
});

export const updateTodo = (value, id) => ({
  type: "UPDATE_TODO",
  payload: value,
  id: id,
});

export const addTodo = (obj) => ({
  
  type: "ADD_TODO",
  payload: obj,
});

export const paginateTodo = (i) => ({
  type: "PAGINATE__TODO",
  payload: i,
});