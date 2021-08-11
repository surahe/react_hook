import React, { useState } from 'react';
import usePrevious from './usePrevious'


function Counter() {

  const [count, setCount] = useState(0);

  const prevCalculation = usePrevious(count);


  return <div>
    <h1>Now: {count}, before: {prevCalculation}</h1>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
  </div>;
}


export default Counter