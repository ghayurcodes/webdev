import './App.css';
import React, { useState } from 'react';
import Navbar from './component/nav'; // Make sure the filename is nav.js and the folder path is correct

function App(props) {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <Navbar /> {/* Capitalized usage */}
      <p>hello kalia {props.name}</p>
      <p>{value}</p>
      <button className='btn' onClick={() => setValue(value + 1)}>Tap me</button>
    </div>
  );
}

export default App;
