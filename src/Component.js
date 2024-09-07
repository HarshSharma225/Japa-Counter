import {useState} from 'react';
import './Component.css';

function Count() {
  let [japcnt,setcounter] = useState(0);
  let[round,changerounds]=  useState(0);

  const addjap = ()=>{
    if(japcnt>106){
      changerounds(round+1);
      japcnt = -1;
    } 
    setcounter(japcnt+1)
  }

  const removejap= ()=>{
    if(japcnt>0)
      setcounter(japcnt-1);
  }

  return (
   <>
    <h1 class="heading">Jap Counter</h1>

    <div class="content">
      <p class="jap">{japcnt}</p>
      <p class="mala">Mala: {round}</p>
      <button class="add-btn" onClick={addjap}>Add</button>
      <button class="remove-btn" onClick={removejap}>Remove</button>
    </div>
    
   </>
  );
}

export default Count;
