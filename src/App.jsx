import React, { useState } from 'react';



const App = () => {
    const state = useState();

    console.log(state);

// using Array destructring 
const [count, setCount ] = useState(0);




const IncNum = () => {
    setCount(count + 1);
    // console.log('clicked');
};
    return (
        <>
        <span > Number Increment</span><br/>
        <h1> {count}</h1><br/>
        <button onClick = {IncNum}> Click Me </button>
        </>
    );
};

export default App;

