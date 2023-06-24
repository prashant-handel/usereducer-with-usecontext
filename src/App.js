import React, { useReducer } from 'react';
import A from './components/A';
import B from './components/B';
import C from './components/C';

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const App = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <CountContext.Provider value={{countDispatch: dispatch }}>
            <div>
                Counter = {count}
                <br />
                App Component
                <br />
                <button onClick={() => dispatch('increment')}>Increment</button>
                <button onClick={() => dispatch('decrement')}>Decrement</button>
                <button onClick={() => dispatch('reset')}>Reset</button>
                <A />
                <B />
                <C />
            </div>
        </CountContext.Provider>
    )
}

export default App
