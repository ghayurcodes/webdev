import React, { useState, useEffect } from 'react';
import './App.css';

const Task = ({ desc,ondel }) => {
  return (
    <div className='task'>
      <span>{desc}</span>
      <span><button className='delb' onClick={
        ondel
      }>Delete</button></span>
    </div>
  );
};

const App = () => {
  // Tasks state
  const [tasks, setTasks] = useState(() => {
  
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // Input state
  const [input, setInput] = useState("");

  // Theme state
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Save theme to localStorage whenever darkMode changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Add new task
  const handleAdd = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
  const newTasks = tasks.filter((e, i) => i !== index);
  setTasks(newTasks);
};


  // Toggle theme
  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={darkMode ? 'top dark' : 'top'}>
      <header>
        <h1>Todo App</h1>
        <button className='theme-btn' onClick={toggleTheme}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <div className='addtask'>
        <input
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className='showtasks'>
        {tasks.map((task, index) => (
          <Task  
          key={index}
          desc={task}
          ondel={() => handleDelete(index)} />
        ))}
      </div>
    </div>
  );
};

export default App;
