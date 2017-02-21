import { connect } from 'react-redux';
import { addNewResource } from '../actions';
// import { getSubject } from '../reducers/subjects';
import App from '../App';
// subjects: getSubject(state.subjects)
const mapStateToProps = state => ({
  subjects: state // subjects should be an array of subjects
})

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSubmit(title, url) {
//       dispatch(addNewResource(title, url));
//     }
//   }
// }

const ResourcesContainer = connect(
  mapStateToProps,
  { onSubmit: addNewResource }
)(App)

export default ResourcesContainer
