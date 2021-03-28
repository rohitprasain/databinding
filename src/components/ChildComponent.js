import React from "react";
import {useState} from "react"

const ChildComponent = () => {
  const [todos, setTodos] = useState("hello");

  const onchangeHandler = (e) => {
    setTodos(e.target.value);
  };

  return (
    <div>
      <div className="changed">
        <input
          type="text"
          name="task"
          onChange={onchangeHandler}
          placeholder={todos}
        />
        <p>{todos}</p>
      </div>
    </div>
  );
};
export default ChildComponent;
