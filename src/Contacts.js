import React from "react";
import { Table } from "semantic-ui-react";
import Contact from "./Contact";

class Contacts extends React.Component {
  // 2. figure out how to hook it up to react(state/dynamic)
  renderContacts = () => {
    return this.props.contacts.map((c) => (
      <Contact deleteContact={this.props.deleteContact} key={c.id} {...c} />
    ));
  };
  render() {
    // 1. first figure out the UI with dummy data.. (no state, static) DONE...
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Option</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{this.renderContacts()}</Table.Body>
      </Table>
    );
  }
}

export default Contacts;
