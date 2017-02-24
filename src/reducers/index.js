import { combineReducers } from 'redux';
import { subjectsById, resourcesById} from './subjects';

const rootReducer = combineReducers({
  subjectsById,
  resourcesById
});

export default rootReducer;

export const getSubjectResources = (state) => {
  Object.keys(state.resourcesById).map(function(id) {
    return state.resourcesById[id]
  })
}
