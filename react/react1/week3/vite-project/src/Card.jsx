import React from "react";

function Card({completed, description, id, completeTask, deleteTask, taskName}) {
  console.log(completed, description, id);
  return (
    <div className="card" style={{ backgroundColor: completed ? "white" : "#917FB3"}}>
    <div className="bottom">
    
    <button className="button-1" onClick={() => completeTask(id)}>Complete</button>
    <button className="button-2" onClick={() => deleteTask(id)}>Delete Task</button>
        </div>
        <h1>{description}</h1> 
    </div> 
  );
}

export default Card;


