import React, { useReducer } from "react";
import Todo from "./Todo";

const initialState = {
  count: 0,
  todo: [],
  name: "",
};

export const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  CHANGE_NAME: "change-name",
  CLEAR_NAME: "clear-name",
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

const addTodo = (name) => {
  console.log(name);
  return { id: Date.now(), name: name, isComplete: false };
};

const reducerFun = (currentState, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { ...currentState, count: currentState.count + 1 };

    case ACTIONS.DECREMENT:
      return { ...currentState, count: currentState.count - 1 };

    case ACTIONS.CHANGE_NAME:
      return { ...currentState, name: action.payload.name };

    case ACTIONS.ADD_TODO:
      return {
        ...currentState,
        todo: [...currentState.todo, addTodo(action.paylaod.name)],
      };

    case ACTIONS.CLEAR_NAME:
      return {
        ...currentState,
        name: "",
      };

    case ACTIONS.TOGGLE_TODO:
      return {
        ...currentState,
        todo: currentState.todo.map((todof) => {
          if (todof.id === action.payload.id) {
            return { ...todof, isComplete: !todof.isComplete };
          }
          return todof;
        }),
      };

    case ACTIONS.DELETE_TODO:
      return {
        ...currentState,
        todo: currentState.todo.filter((todof) => {
          return todof.id !== action.payload.id;
        }),
      };

    default:
      return currentState;
  }
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducerFun, initialState);

  const handleDec = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  const handleInc = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const inputChangeHandler = (e) => {
    dispatch({ type: ACTIONS.CHANGE_NAME, payload: { name: e.target.value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, paylaod: { name: state.name } });
    dispatch({ type: ACTIONS.CLEAR_NAME });
  };

  return (
    <>
      <div style={{ background: "lightgray", padding: "20px", margin: "20px" }}>
        <button onClick={handleDec}>-</button>
        <span>{state.count}</span>
        <button onClick={handleInc}>+</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.name}
          onChange={inputChangeHandler}
        ></input>
        <button type="submit">Submit</button>
        {console.log(state)}
        {state.todo.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </form>
    </>
  );
}

export default UseReducer;
