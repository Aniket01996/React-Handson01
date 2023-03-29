import './App.css';
import FunctionalComponent from './Component/FunctionalComponent';
import ClassComponent from './Component/ClassComponent';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(false);
  // state variable // state function     // Initial value of state variable
  const [data, setData] = useState(false);
  const handleFunction = () => {
    setCount(!count);
    console.log(count);
  }
  const handleClass = () => {
    setData(!data);
    console.log(data);
  }
  
  return (
    <div className="App">
      <h1>Styling using Functional & Class component</h1>
      <div className="btn">
      <button onClick={handleFunction}>To see styling in Functional Component</button>
      <button onClick={handleClass}>To see styling in Class Component</button>
      </div>
      <div className="container">
      {count && <FunctionalComponent />}
      {data && <ClassComponent />}
      </div>
    </div>
  );
}

export default App;
