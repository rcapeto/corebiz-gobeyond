import { useState } from 'react';
import './styles.css';

export default function Counter() {
   const [count, setCount] = useState(0);
   
   function increment() {
      setCount(count + 1);
   }

   function decrement() {
     if(count > 0) {
        setCount(count - 1);
     }
   }

   return(
      <div className="content">
         <h1>Contador Go Beyond</h1>
         <div className="counter">
            <button onClick={decrement}>Diminuir</button>
            <div>{count}</div>
            <button onClick={increment}>Aumentar</button>
         </div>
      </div>
   );
}