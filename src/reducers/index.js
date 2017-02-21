import { combineReducers } from 'redux';
import { subjectsById, resourcesById} from './subjects';

const rootReducer = combineReducers({
  subjectsById,
  resourcesById
});

export default rootReducer;
