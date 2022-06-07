
import './App.css';
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
function App() {
  // const [count,setCount]=React.useState(0)
  const dispatch=useDispatch()
  const count=useSelector((state)=>state.count)
  return (
    <div className="App">
      <div>Redux lec 1</div>
      <h1>Counter:{count}</h1>
      <div>
      <button onClick={()=>dispatch({type:"add"})}>+</button>
      <button onClick={()=>dispatch({type:"dec"})}>-</button>
      </div>
      

    </div>
    
  );
}

export default App;
