import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class Subject extends Component {
  render() {
    const { resources } = this.props
    const resourcesList = resources.map((subject, key) => {
      return (
        <ListGroupItem key={`subject${key}`}>
          <a href={subject.url}>{subject.title}</a>
          <p>Sample description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac eros lacinia, tempor est in.</p>
        </ListGroupItem>
      )
    });
    return(
      <ListGroup fill>
          {resourcesList}
      </ListGroup>
    );
  }
}
