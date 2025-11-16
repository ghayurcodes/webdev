import React, { useState } from 'react';
import './App.css'
const Task = ({ desc }) => {
  return (
    <div className='task'>
      {desc}
    </div>
  )
}

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if(input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput(""); // clear input
    }
  }

  return (
    <div className='top'>
      <div className='addtask'>
        <input 
          type='text' 
          value={input} 
          onChange={e => setInput(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className='showtasks'>
        <h1>TASKS!</h1>
        {tasks.map((task, index) => (
          <Task key={index} desc={task} />
        ))}
      </div>
    </div>
  )
}

export default App;
