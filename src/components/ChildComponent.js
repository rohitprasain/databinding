import React from "react";

const ChildComponent = ({todos , onchangeHandler , ind}) => {
  // const {} = todos;
  
    return (
      <div>
        <div className="changed">
          <input
            type="text"
            name="task"
            onChange={onchangeHandler(ind)}
            placeholder={todos.task}
          />
        </div>
      </div>
    );
 

}
export default ChildComponent;
