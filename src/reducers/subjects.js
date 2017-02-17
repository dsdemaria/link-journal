import { combineReducers } from 'redux';

const resource = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_NEW_RESOURCE':
      return {
        title: action.title,
        url: action.url,
      }
    default:
      return state
  }
}

const resourceById = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_NEW_RESOURCE':
      return {
        ...state,
        [action.id]: resource(state[action.id], action),
      }
  }
}

const allResources = (state = [], action) => {
  switch(action.type) {
    case 'ADD_NEW_RESOURCE':
      return [...state, action.id];
    default:
      return state;
  }
}
const subjects = combineReducers({
  resourceById,
  allResources,
})

// const subject = (state = {}, action) => {
//   switch(action.type) {
//     case 'ADD_NEW_RESOURCE':
//       return {
//           ...state,
//           resource(state[action.id], action)
//         }
//     default:
//       return state
//   }
// }
// // not quite...
// const subjects = (state = initialState.subjects, action) => {
//   switch(action.type) {
//     case 'ADD_NEW_RESOURCE':
//       return {
//         ...state,
//         [action.id]: subject(state[action.id], action)
//       }
//     default:
//       return state
//   }
// }

export default subjects
