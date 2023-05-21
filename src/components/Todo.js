import React, { useState, useEffect } from "react";
import { ACTIONS } from "./UseReducer";

function Todo({ todo, dispatch }) {
  const toggleHandler = () => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
  };

  return (
    <div>
      <span style={{ color: todo.isComplete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button
        type="button"
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
