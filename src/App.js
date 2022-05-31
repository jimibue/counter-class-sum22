import { useState } from 'react';
import './App.css';
import ContactForm from './ContactForm';
import Contacts from './Contacts';
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
      <div>
        <h1>Contacts DEMO</h1>
        <ContactForm />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
