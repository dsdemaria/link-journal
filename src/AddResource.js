import React, { Component } from 'react';
// import { Link } from 'react-router';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class AddResource extends Component {
  constructor() {
    super();
    this.state = {
      titleValue: '',
      urlValue: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  _validateInput() {
    const length = this.state.titleValue.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }
  render() {
    return (
      <form onSubmit={e => {
          this.props.onSubmit(this.state.titleValue, this.state.urlValue)
          this.setState({ titleValue: '', urlValue: '' });
          e.preventDefault()
        }}>
        <FormGroup
          controlId="formBasicText"
          validationState={this._validateInput()}
        >
          <ControlLabel>Add Resource</ControlLabel>
          <FormControl
            type="text"
            name="titleValue"
            value={this.state.titleValue}
            placeholder="Enter title"
            onChange={this.handleChange}
          />
          <FormControl
            type="text"
            name="urlValue"
            value={this.state.urlValue}
            placeholder="Enter url"
            onChange={this.handleChange}
          />
          <Button type="submit">
            Add Resource
          </Button>
        </FormGroup>
      </form>
    );
  }
}
