import React, { useContext } from 'react';
import counterContext from './CounterContext'
const Child = () => {

    let counterValue = useContext(counterContext)
    console.log(counterValue);
    return (
         <div>
            <h1>This is first</h1>
    <h4>Counter value is : {counterValue}</h4>
    
         </div>
    );
}


export default Child;