import React, { Component } from 'react';
import { Link } from 'react-router';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class AddResource extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  validateInput() {
    const length = this.state.inputValue.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }
  handleSubmit(e) {
    e.preventDefault();
    // add new resource to state
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="formBasicText"
          validationState={this.validateInput()}
        >
          <ControlLabel>Add Resource</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}
