import React, { Component } from 'react';
// import { Link } from 'react-router';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

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
          e.preventDefault()
          this.props.onSubmit(this.state.title, this.state.url)
          this.setState({ titleValue: '', urlValue: '' });
        }}>
        <FormGroup
          controlId="formBasicText"
          validationState={this._validateInput()}
        >
          <ControlLabel>Add Resource</ControlLabel>
          <FormControl
            type="text"
            name="title"
            value={this.state.inputValue}
            placeholder="Enter title"
            onChange={this.handleChange}
          />
          <FormControl
            type="text"
            name="url"
            value={this.state.inputValue}
            placeholder="Enter url"
            onChange={this.handleChange}
          />
        </FormGroup>
      </form>
    );
  }
}
