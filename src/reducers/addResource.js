import { v4 } from 'uuid';

const initialState = {
  subjects: {
    [v4()]: { // parent ID?
      subject: "Functional Programming Basics",
      resources: [
        {
          id: v4(), // child ID?
          title: "Something",
          url: "https://facebook.github.io/react/docs/thinking-in-react.html"
        },
        {
          id: v4(),
          title: "Another one",
          url: "https://facebook.github.io/react/docs/thinking-in-react.html"
        }
      ]
    },
    [v4()]: {
      subject: "Functional Programming Basics",
      resources: [
        {
          id: v4(),
          title: "Something",
          url: "https://facebook.github.io/react/docs/thinking-in-react.html"
        },
        {
          id: v4(),
          title: "Another one",
          url: "https://facebook.github.io/react/docs/thinking-in-react.html"
        }
      ]
    }
  }

const resource = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_NEW_RESOURCE':
      return {
          id: action.id,
          title: action.title,
          url: action.url,
        }
    default:
      return state
  }
}
// below might be right? not, conflicting id values...
const subject = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_NEW_RESOURCE':
      return {
          [action.id]: {
            ...state,
            resources: [
              ...state.resources,
              resource(state[action.id], action)
            ]
          }
        }
    default:
      return state
  }
}

const subjects = (state = initialState.subjects, action) => {
  switch(action.type) {
    case 'ADD_NEW_RESOURCE':
      return {
        ...state,
        [action.id]: subject(state[action.id], action)
      }
    default:
      return state
  }
}

export default subjects
