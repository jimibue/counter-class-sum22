import React from "react";
import { Form } from "semantic-ui-react";

class ContactForm extends React.Component {
  state = {
    name: "",
    phone: "",
  };
  handleSubmit = (e) => {
    // e.preventDefault(); semantic Form handles this for us
    console.log("submitted");
    console.log('this.state: ', this.state)
    // add contact to contacts state
    this.props.addContact(this.state)
    this.setState({
        name: "",
        phone: "", 
    })
  };
  handleChange = (e, {name,value}) => {
    this.setState({
        // if we weren't useing Semantic
        // [e.target.name]: e.target.value
        [name]: value
    })
    // if (e.target.name === "phone") {
    //   this.setState({
    //     ['phone']:e.target.value,
    //   });
    // }
    // if (e.target.name === "name") {
    //   this.setState({
    //     name: e.target.value,
    //   });
    // }
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            label="Name"
            placeholder="name placeholder"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Phone"
            placeholder="phone placeholder"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    );
  }
}

export default ContactForm;
