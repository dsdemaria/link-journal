import { connect } from 'react-redux';
import { addNewResource } from '../actions'
import App from '../App';

const mapStateToProps = (state) => ({
  subjects: state,
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
