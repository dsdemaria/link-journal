import React, { Component } from 'react';
import { Panel, Grid } from 'react-bootstrap';
import Subject from './Subject';
import AddResource from './AddResource';
import './App.css';
import theState from './state.json';

class App extends Component {
  constructor() {
    super();
    this.state = theState;
    // "subjects": [
    //     {
    //       "subject": "Functional Programming Basics",
    //       "resources": [
    //         {
    //           "title": "Thinking in React",
    //           "url": "https://facebook.github.io/react/docs/thinking-in-react.html"
    //         }
    //       ]
    //     },
    //   ]
    // }
  }
  render() {
    const list = this.state.subjects.map((item, key) => {
      return (
        <Panel collapsible defaultExpanded header={item.subject} key={key + item.subject}>
          <p>Basic description here.</p>
          <Subject resources={item.resources} />
          <AddResource />
        </Panel>
      );
    });
    return (
      <div className="App">
        <Grid>
          {list}
        </Grid>
      </div>
    );
  }
}

export default App;
