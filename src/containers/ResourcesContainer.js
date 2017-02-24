import React from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import Subject from '../Subject';
import AddResource from '../AddResource';
import { addNewResource } from '../actions';
import { getVisibleProducts } from '../reducers/subjects';

const ResourcesContainer = (props) => (
  <div>
    {props.visibleSubjects.map((subject) =>
      <Panel collapsible defaultExpanded header={subject.subject} key={subject.subject}>
        <p>Basic description here.</p>
        <Subject resources={subject.resources} />
        <AddResource onSubmit={props.onSubmit} />
      </Panel>
    )}
  </div>
)

const mapStateToProps = state => ({
  subjects: state, // subjects should be an array of subjects
  visibleSubjects: getVisibleProducts(state)
})

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSubmit(title, url) {
//       dispatch(addNewResource(title, url));
//     }
//   }
// }

export default connect(
  mapStateToProps,
  { onSubmit: addNewResource }
)(ResourcesContainer)
