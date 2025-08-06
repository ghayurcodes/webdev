import './App.css';
import React, { useState ,useEffect, useRef} from 'react';
import Navbar from './component/nav'; // Make sure the filename is nav.js and the folder path is correct

function App(props) {
  const [value, setValue] = useState(0);
  let a=useRef(0)
  

  useEffect(() => {
    a.current=a.current+1
  alert("hello" +a.current)
 
  }, [value])

 
  return (
    <div className="App">
      <Navbar /> 
      <p>Hello {props.name}</p>
      <p>{value}</p>
      <button className='btn' onClick={() => setValue(value + 1)}>Tap me</button>
      
    </div>
  );
  
}

export default App;
