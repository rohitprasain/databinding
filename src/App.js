import "./App.css";

import React, { useState } from "react";
import ChildComponent from "./components/ChildComponent";




const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "task1" },
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
  };

  return todos.map((todo, ind) => {
    return (
      
      <div className="App" key={ind}>
        <div className="original">
          {/* {todo.id}
          {todo.task} */}
          <h2>{JSON.stringify(todo)}</h2>
        </div>
        <ChildComponent todos={todo} onchangeHandler={onchangeHandler} ind={ind}/>
      </div>
  
    );
  });
  
}

export default App;
