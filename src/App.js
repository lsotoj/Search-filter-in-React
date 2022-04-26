import { useState } from 'react';
import './App.css';

function App() {
  const fruits = ['Banana', 'Apple', 'Orange', 'Mango', 'Pineapple', 'Watermelon'];
  
  const displayFrutas = (arr) => { 
    return arr.map((fruta) => {return <div key={ fruta }>{ fruta }</div>});
  }
  
  const [display, setDisplay] = useState(displayFrutas(fruits));



  function handleChange(event) {
    const filtered = fruits.filter((fruta) => {
      return fruta.toLocaleLowerCase().includes(event.target.value.toLowerCase())
    });
    setDisplay(displayFrutas(filtered));
  }

  return (
    <div className="App">
      <input name='input' onChange={handleChange} />
      <div>
        {display}
      </div>
    </div>
  );
}

export default App;
