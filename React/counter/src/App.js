import { useState } from 'react';
import './app.css';
import Button from './components/button';

function App() {
  const [value, setValue] = useState(0);
  const [btnColor, setBtnColor] = useState('#222');
  let count = value;
  const onButtonClick = (name) => {
    if (name === 'decrease') {
      count--;
    } else if (name === 'increase') {
      count++;
    } else{
      count = 0;
    }
    if (count<0) {
      setBtnColor('red');
    }
    if(count>0){
      setBtnColor('green');
    }
    if(count===0){
      setBtnColor('#222');
    }
    setValue(count);
  };

  return (
    <div>
      <main>
      <div class="container">
        <h1>
          counter
        </h1>
        <span id="value" style = {{ color: btnColor}} >{value}</span>
        <div class="button-container">
          <Button name = "decrease" value={value} onClick={onButtonClick}/>
          <Button name = "reset" value={value} onClick={onButtonClick}/>
          <Button name = "increase" value={value} onClick={onButtonClick}/>
        </div>
      </div>
      </main>
    </div>
  );
}

export default App;
