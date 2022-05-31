import React, { useState } from "react";
import { Button, Container, Header } from "semantic-ui-react";
import "./App.css";
import ContactForm from "./ContactForm";
import Contacts from "./Contacts";
import CounterClass from "./CounterClass";
import CounterFunc from "./CounterFunc";

class App extends React.Component {
  state = {
    show: false,
    contacts: [
      { id: 1, name: "Bob", phone: "12345645" },
      { id: 2, name: "Jerry", phone: "33445645" },
      { id: 3, name: "Sally", phone: "23445645" },
    ],
  };
  render() {
    const {show} = this.state
    return (
      <Container>
        {show && <CounterFunc title="counter 1" />}
        {show && <CounterFunc title="counter 2" />}
        {show && <CounterClass title="counter 1" />}
        {show && <CounterClass title="counter 2" />}
        <Button color={"blue"} onClick={() => this.setState({show:!show})}>
          toggle counter Example
        </Button>
        <div>
          <Header as="h1">Contacts DEMO</Header>
          <ContactForm />
          <Contacts contacts={this.state.contacts}/>
        </div>
      </Container>
    );
  }
}

export default App;
