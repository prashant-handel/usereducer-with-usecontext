import React from 'react';
import { useContext } from 'react';
import { CountContext } from '../App';

const F = () => {
    const countContext = useContext(CountContext);
  return (
    <div>
      Component F <br />
      <button onClick={()=> countContext.countDispatch('increment')}>Increment</button>
      <button onClick={()=> countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={()=> countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default F
