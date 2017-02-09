import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

const fillResources = (topic) => {
  return (
    topic.map((item, key) => {
      return (
        <NavItem><Link key={key}>{item.subject}</Link></NavItem>
      );
    })
  );
};

const Navigation = (props) => (
  <Nav bsStyle='tabs'>
    {fillResources(props.weeks)}
  </Nav>
);

Navigation.propTypes = {
  weeks: React.PropTypes.arrayOf(React.PropTypes.shape({
    subject: React.PropTypes.string,
    resources: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        title: React.PropTypes.string,
        url: React.PropTypes.string,
      }),
    ),
  })),
}

export default Navigation;
