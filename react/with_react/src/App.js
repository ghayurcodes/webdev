import './App.css';
import { TestProvider, TestContext } from './component/Context';
import React, { useState, useEffect, useRef, useContext } from 'react';
import Navbar from './component/nav';

// 👇 Example consumer inside provider
function ContextConsumerExample() {
  const from_context = useContext(TestContext); // ✅ now inside provider
  return <p>Context says: {from_context}</p>;
}

function App(props) {
  let [val, setval] = useState("");
  const [value, setValue] = useState(0);      
  let a = useRef(0);
  let [showbtn, setshowbtn] = useState(false);

  let names = [
    { name: "ali", age: 12 },
    { name: "ghayur", age: 42 },
    { name: "gul khan", age: 99 },
    { name: "laiba", age: 29 }
  ];

  let Card = (props) => {
    return (
      <div className='crd'>
        <p>name is: {props.name} age is:{props.age}</p>
      </div>
    );
  };

  useEffect(() => {
    if (value === 10) {
      setshowbtn(true);              
    }
  }, [value]);

  return (
    <TestProvider>
      <div className="App">
        <Navbar />
        <p>Hello {props.name}</p>
        <p>{value}</p>

        {/* ✅ now shows value from context */}
        <ContextConsumerExample />  

        {showbtn && <p>yay button hits 10</p>}
        {names.map((e, index) => (
          <Card key={index} name={e.name} age={e.age} />
        ))}

        <button className='btn' onClick={() => setValue(value + 1)}>
          Tap me
        </button>

        <input
          type="text"
          value={val}
          onChange={(e) => setval(e.target.value)}
        />
        <p>{val}</p>
      </div>
    </TestProvider>
  );
}

export default App;
