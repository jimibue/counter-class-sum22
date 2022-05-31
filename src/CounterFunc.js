// hook rules
// can only use hooks in function components
// can only use hooks at top level of components
// hooks must always start with the use word

import { useState, useEffect } from "react";

const CounterFunc = (props) => {
  const [count, setCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  // onMount function
  useEffect(() => {
    console.log("runs on mount and only on mount");

    // this runs when components unmounts
    return () =>{
       console.log('unmounted')
    }
  }, []);

  // onMount, onComponentDidUpdate function
  useEffect(() => {
    console.log("runs on mount and when count state changes");
    if(count === 10){
       setCount(0)
    }
  }, [count]);

  const add = () => {
    setCount(count + 1);
    setTotalCount(totalCount + 1);
  };
  return (
    <div>
      <h1>Counter Functional Component</h1>
      <h1>{props.title}</h1>
      <p>count: {count}</p>
      <p>totalCount: {totalCount}</p>
      <button onClick={add}>add</button>
      <button onClick={()=> setTotalCount(0)}>reset total count</button>
    </div>
  );
};

export default CounterFunc;
