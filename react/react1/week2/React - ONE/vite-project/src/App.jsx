import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './styles.css';

import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import tasks from "./tasks.js";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");


  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    }
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
  
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
    <div className='addTask'>
    <input onChange={handleChange}/>
    <button onClick={addTask}> Add task</button>
    <div className='List'>
      {todoList.map((task) => {
        return (
          <div>
          <h1>{task.taskName}</h1>
          <button onClick={() => deleteTask(task.id)}>Delete Task</button>
          </div>
          );
      })}
      </div>
      </div>
      </div>)};
    
export default App;