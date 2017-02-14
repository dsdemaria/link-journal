import { connect } from 'react-redux';
import { addNewResource } from '../actions'
import App from '../App';

const mapStateToProps = (state) => {
  return {
    subjects: state.subjects,
  }
}

// look at addResource parameter for values that are needed, i think these are correct
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (title, url) => {
      dispatch(addNewResource(title, url));
    }
  }
}

const ResourcesContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default ResourcesContainer
