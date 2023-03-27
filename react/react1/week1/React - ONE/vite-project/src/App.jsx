import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'

import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import tasks from "./tasks.js";
function App() {
  return (
    <div>
      <h1 className="heading">ToDo LIST</h1>
      <Card
        name={tasks[0].name}
        img={tasks[0].imgURL}
        date={tasks[0].date}
        description={tasks[0].description}
      />
      <Card
        name={tasks[1].name}
        img={tasks[1].imgURL}
       date={tasks[1].date}
        description={tasks[1].description}
      />
      <Card
        name={tasks[2].name}
        img={tasks[2].imgURL}
        date={tasks[2].date}
        description={tasks[2].description}
      />
    </div>
  );
}

export default App;