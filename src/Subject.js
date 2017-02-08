import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class Subject extends Component {
  render() {
    const resources = this.props.resources.map((resource, key) => {
      return (
        <ListGroupItem key={key + resource.title}>
          <a href={resource.url}>{resource.title}</a>
          <p>Sample description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac eros lacinia, tempor est in, mollis sapien. Nunc nunc urna, eleifend vel erat sit amet.</p>
        </ListGroupItem>
      )
    });
    return(
      <ListGroup fill>
          {resources}
      </ListGroup>
    );
  }
}
