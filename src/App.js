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

  // { id: 3, name: "Sally!!!!", phone: "23445645sdfsdf" },
  updateContact = (contact) => {
    let updateContacts = this.state.contacts.map((c) =>
      c.id === contact.id ? contact : c
    );
    this.setState({
      contacts: updateContacts,
    });
  };

  addContact = (contactInfo) => {
    let newContact = { ...contactInfo, id: Math.random() };
    let newContacts = [newContact, ...this.state.contacts];
    this.setState({
      contacts: newContacts,
    });
  };

  deleteContact = (id) => {
    let newContacts = this.state.contacts.filter((c) => c.id !== id);
    this.setState({
      contacts: newContacts,
    });
  };
  render() {
    const { show } = this.state;
    return (
      <Container>
        {show && <CounterFunc title="counter 1" />}
        {show && <CounterFunc title="counter 2" />}
        {show && <CounterClass title="counter 1" />}
        {show && <CounterClass title="counter 2" />}
        <Button color={"blue"} onClick={() => this.setState({ show: !show })}>
          toggle counter Example
        </Button>
        <div>
          <Header as="h1">Contacts DEMO</Header>
          <ContactForm addContact={this.addContact} />
          <Contacts
            contacts={this.state.contacts}
            updateContact={this.updateContact}
            deleteContact={this.deleteContact}
          />
        </div>
      </Container>
    );
  }
}

export default App;
