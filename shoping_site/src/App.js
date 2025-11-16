import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [num,setnu]=useState(0)

  function inc(){
    setnu(num+1)
    if(num==10){
      setnu("loz")
    }
  }
  return (
    <>
     <h1>{num}</h1>
    <button onClick={inc}>increment</button>
    </>
   
  );
}

export default App;
