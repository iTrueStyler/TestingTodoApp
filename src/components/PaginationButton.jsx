import React from "react";
import { useDispatch } from "react-redux";
import { fetchTodos, paginateTodo } from "../redux/actions/todos";

function PaginationButton({ count }) {
  const dispatch = useDispatch();

  function clickAddHandler(count) {
    dispatch(fetchTodos(count));
  }

  return (
    <button
      className="pagination__button button"
      onClick={() => clickAddHandler(count)}
    >
      {count}
    </button>
  );
}

export default PaginationButton;
