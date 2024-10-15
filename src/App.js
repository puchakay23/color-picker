
import { useState } from 'react';
import './App.css';

function App() {
  const [color,setColor] = useState(" ")
  function changeHandler(event){
      setColor(event.target.value);
  }

  return (
    <div className="App">
      <div className='card'>
        <h1>Color Picker</h1>
        <div className='box' style={{backgroundColor: color}}>
          <p>{color}</p>
        </div>
        <input type='color' onChange={changeHandler}></input>
      </div>
    </div>
  );
}

export default App;
