import { useState } from 'react';
import './App.css';
import CounterClass from './CounterClass';
import CounterFunc from './CounterFunc';

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      {show && <CounterFunc title='counter 1'/>}
      {show && <CounterFunc title='counter 2'/>}
      {show && <CounterClass title='counter 1'/>}
      {show && <CounterClass title='counter 2'/>}
      <button onClick={()=> setShow(!show)}>toggle counter Example</button>
    </div>
  );
}

export default App;
