
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <p>hello kalia {value}</p>
      <button onClick={() => setValue(value+1)}>tap me</button>
    </div>
  );
}

export default App;
