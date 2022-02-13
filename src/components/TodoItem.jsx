import React from "react";
import { deleteTodos, completeTodo, updateTodo } from "../redux/actions/todos";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ReactLogo from '../assets/Dragon-Logo.svg';


const TodoItem = ({ completed, id, title, userId }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(title);
  const [editable, setEditable] = useState(false);

  function clickDeletekHandler(id) {
    dispatch(deleteTodos(id));
  }

  function clickCompleteHandler(id) {
    dispatch(completeTodo(id));
  }

  function clickEditkHandler() {
    if (editable) {
      dispatch(updateTodo(value, id));
    }
    setEditable((state) => !state);
  }

  return (
    <>
      <div className="todo-item">
        <div>Comleted: {completed ? "True" : "False"}</div>
        <div> ID: {id}</div>

        <div> userID: {userId}</div>
        {!editable ? (
          <div> Goal: {title}</div>
        ) : (
          <input
            className="todo-item__input"
            type="text"
            placeholder={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
        <button onClick={() => clickDeletekHandler(id)}>Delete ToDo</button>
        <button onClick={() => clickCompleteHandler(id)}>
          {completed ? "Uncomplete Todo" : "Complete Todo"}
        </button>
        <button onClick={() => clickEditkHandler()}>
          {!editable ? "Edit" : "Update"}
        </button>
        <img className='todo-item__logo' src={ReactLogo} alt="React Logo" />
      </div>
    </>
  );
};

export default TodoItem;
