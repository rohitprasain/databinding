import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "task11" },
    { id: 2, task: "task2" },
  ]);

  const onchangeHandler = (id) => (e) => {
    console.log(id);

    let copyTodo = [...todos];
    let indexCopyTodo = { ...copyTodo[id] };
    // console.log(indexCopyTodo)
    indexCopyTodo.task = e.target.value;

    copyTodo[id] = indexCopyTodo;

    setTodos(copyTodo);
    // console.log(newTask)
    // setTodos( {...todos[id+1] ,task : e.target.value})
    // console.log(name)
  };

  return todos.map((todo, ind) => {
    return (

        <div className="App" key={ind}>
          <div className="original">
            {/* {todo.id}
                  {todo.task} */}
            <h2>{JSON.stringify(todo)}</h2>
          </div>
          <div className="changed">
            <input
              type="text"
              name="task"
              onChange={onchangeHandler(ind)}
              placeholder={todo.task}
            />
          </div>
        </div>

    );
  });
}

export default App;
