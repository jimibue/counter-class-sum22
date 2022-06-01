import React from "react";
import { Button, Form, Table } from "semantic-ui-react";

class Contact extends React.Component {
  state = {
    editing: false,
    name: this.props.name,
    phone: this.props.phone,
  };
  edit = () => {
    this.setState({ editing: !this.state.editing });
  };
  handleChange = (e, { value, name }) => {
    this.setState({
      [name]: value,
    });
  };
  update = ()=>{
      // need update contact state in app.js
      const {id} = this.props
      const {name,phone} = this.state
      this.props.updateContact({id, name, phone})
      this.setState({
        editing:false,
      })
  }
  render() {
    const { editing, name, phone } = this.state;
    return (
      <Table.Row>
        <Table.Cell>
          {editing ? (
            <Form.Input name="name" onChange={this.handleChange} value={name} />
          ) : (
            this.props.name
          )}
        </Table.Cell>
        <Table.Cell>
          {editing ? (
            <Form.Input
              name="phone"
              onChange={this.handleChange}
              value={phone}
            />
          ) : (
            this.props.phone
          )}
        </Table.Cell>
        <Table.Cell>
  
          {editing && <Button color="blue" onClick={this.update}>Update</Button>}
          <Button color={ editing ? "red" : "blue"} onClick={this.edit}>
            {editing ? "Cancel" : "Edit"}
          </Button>
          {!editing && (
            <Button
              color="red"
              onClick={() => this.props.deleteContact(this.props.id)}
            >
              Delete
            </Button>
          )}
        </Table.Cell>
      </Table.Row>
    );
  }
}
export default Contact;
