import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Subject from './Subject';
import AddResource from './AddResource';
// import { getResources } from './reducers/subjects';
import './App.css';

const getSubject = subject => {
  let subjectArray = []
  for(let key in subject) {
    if (subject.hasOwnProperty(key)) {
      subjectArray.push(subject[key])
    }
  }
  return subjectArray
}

class App extends Component {
  render() {
    const { subjectsById } = this.props.subjects
    const list = getSubject(subjectsById).map((subject) => {
      return (
        <Panel collapsible defaultExpanded header={subject.subject} key={subject.subject}>
          <p>Basic description here.</p>
          <Subject resources={subject.resources} />
          <AddResource onSubmit={this.props.onSubmit} />
        </Panel>
      );
    });

    return (
      <div className="App">
        {list}
      </div>
    );
  }
}

export default App;
