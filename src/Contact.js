import React from "react";
import { Button, Table } from "semantic-ui-react";

class Contact extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.name}</Table.Cell>
        <Table.Cell>{this.props.phone}</Table.Cell>
        <Table.Cell>
          <Button color="red">Delete</Button>
          <Button color="blue">Update</Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}
export default Contact;