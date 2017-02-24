
// Selectors
export const getResource = (state, id) =>
  state.resourcesById[id]

export const getSubject = (state, id) => {
  return {
    ...state.subjectsById[id],
    resources: state.subjectsById[id].resources.map(id => getResource(state, id))
  }
}

export const getVisibleProducts = state => {
  return Object.keys(state.subjectsById)
    .reduce((arr, subject) => {
      return [...arr, getSubject(state, subject)]
    }, [])
}


// action.subjects = all of subjects.json
export const subjectsById = (state = {}, action) => {
  switch(action.type) {
    case 'RECEIVE_SUBJECTS':
      return {
        ...state,
        ...action.subjects.reduce((obj, subject) => {
          obj[subject.id] = {
            subject: subject.subject,
            resources: subject.resources.reduce((arr, resource) => {
              return [...arr, resource.id]
            }, [])
          }
          return obj
        }, {})
      }
    default: return state
  }
}

export const resourcesById = (state = {}, action) => {
  switch(action.type) {
    case 'RECEIVE_SUBJECTS':
      return {
        ...state,
        ...action.subjects.reduce((parent, subject) => {
            return subject.resources.reduce((obj, resource) => {
              parent[resource.id] = {
                title: resource.title,
                url: resource.url
              }
              return parent
            }, {})
        }, {})
      }
    default: return state
  }
}
