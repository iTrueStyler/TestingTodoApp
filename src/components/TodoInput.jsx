import React from "react";

import { useState } from "react";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todos";
function TodoInput() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  function clickAddHandler(obj) {
    setName("");
    dispatch(addTodo(obj));
  }
  return (
    <div className="todo-input-wrapper">
      <input
      placeholder='Write your goal'
        className="todo-input-wrapper__input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <button
        className="todo-input-wrapper__button"
        onClick={() =>
          clickAddHandler({
            id: v4().slice(0, 3),
            title: name,
            completed: false,
            userId: 1,
          })
        }
      >
        Add Todo
      </button>
    </div>
  );
}

export default TodoInput;
