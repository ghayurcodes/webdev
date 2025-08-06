import './App.css';
import React, { useState ,useEffect, useRef} from 'react';
import Navbar from './component/nav'; // Make sure the filename is nav.js and the folder path is correct

function App(props) {
  const [value, setValue] = useState(0);      //usestate(hooks)
  let a=useRef(0)
  let [showbtn, setshowbtn] = useState(false);
  

  // useEffect(() => {              //useeffect
  //   a.current=a.current+1     //setrefuse
  // alert("hello" +a.current)
 
  // }, [value])

  useEffect(() => {
   if(value==10){
    setshowbtn(true)              //conditional rendering
   }
  }, )

 
  return (
    <div className="App">
      <Navbar /> 
      <p>Hello {props.name}</p>
      <p>{value}</p>
      {showbtn &&<p>yay button hits 10</p>}
      <button className='btn' onClick={() => setValue(value + 1)}>Tap me</button>
      
    </div>
  );
  
}

export default App;
