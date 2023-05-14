

import React, { useState,useEffect } from 'react';
import Card from './Card';
import 'typeface-open-sans';
import './styles.css';

function App() {
  const productivityImageURL = 'https://clickup.com/blog/wp-content/uploads/2019/04/measuring-productivity.png'; 
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newDeadline, setNewDeadline] = useState('');
   
  useEffect(() => {
    fetch('https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw')
      .then(response => response.json())
      .then((data) => data.map((item) => ({ ...item, completed: false })))
      .then(data => setTodoList(data));
      console.log("api");
  }, []);


  const addTask = () => {
    const task = {
      // id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
    
      id: todoList.length + 1,
      description: newTask,
      deadline: newDeadline,
      completed: false
       /* id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      
    };
    */
    };
    setTodoList([...todoList, task]);
    setNewTask('');
    setNewDeadline('');
    console.log("hey")
  };
  
  const handleChange = (event) => {
    setNewTask(event.target.value);
    console.log("handle")
  };
  
  const handleDeadlineChange = (event) => {
    setNewDeadline(event.target.value);
  };
  
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
     


 const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  }; 

  return (
    <div className="App">
    <h1>First and upmost todo-List!</h1>
    <img
        src={productivityImageURL}
        alt="Productivity"
        className="rounded-image"
      />
      <div className="addTask">
        <input className="input-1" onChange={handleChange} />
        <input className="input-1" type="text" value={newDeadline} 
        onChange={handleDeadlineChange} placeholder="Enter a deadline"
/>
        <button className="add-button" onClick={addTask}>
          Add task
        </button>
        <div className="List">
          {todoList.length === 0 ? (
            <h1>You have no tasks for today. <br></br>Create one or enjoy your free time!</h1>)
  : (
            todoList.map((task) => (
              <Card
               key={task.id}
              description={task.description}
             id={task.id}
              completed={task.completed}
                deleteTask={deleteTask}
                deadline={handleDeadlineChange}
                completeTask={completeTask}
              />
            ))
          )}
        </div>
      </div>
      <footer className="copyright">
        &copy; {new Date().getFullYear()} Yuliia Davydenko. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
