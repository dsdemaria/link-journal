import { v4 } from 'uuid';

const initialState = {
  subjects: [
    {
      id: v4(),
      subject: "Functional Programming Basics",
      resources: [
        {
          id: v4(),
          title: "Thinking in React",
          url: "https://facebook.github.io/react/docs/thinking-in-react.html"
        },
        {
          id: v4(),
          title: "Something else",
          url: "https://facebook.github.io/react/docs/thinking-in-react.html"
        },
        {
          id: v4(),
          title: "Another one",
          url: "https://facebook.github.io/react/docs/thinking-in-react.html"
        }
      ]
    }
  ]
};

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

const subject = (state = [], action) => {
  switch(action.type) {
    case 'ADD_NEW_SUBJECT':
      return {
        id: action.id,
        subject: action.subject,
        resources: [],
      }
    case 'ADD_NEW_RESOURCE':
      return [
        ...state,
        resource(undefined, action),
      ]
    default:
      return state
  }
}

const subjects = (state = initialState.subjects, action) => {
  switch(action.type) {
    case 'ADD_NEW_SUBJECT':
      return [
        ...state,
        subject(undefined, action),
      ]
    case 'ADD_NEW_RESOURCE':
      return [
        ...state,
        subject(undefined, action)
      ]
    default:
      return state
  }
}

export default subjects
