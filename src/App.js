import React, { Component } from 'react';
import Subject from './Subject';
import theState from './state.json';
import { Panel, Grid } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = theState;
    // "weeks": [
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
  const list = this.state.weeks.map((item, key) => {
    return (
      <Panel collapsible defaultExpanded header={item.subject} key={key+item.subject}>
      Basic description here.
        <Subject resources={item.resources} />
      </Panel>
    )
  })
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
