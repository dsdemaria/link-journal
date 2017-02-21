
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

const getResource = (state, id) =>
  state.resourcesById[id]

export const getResources = (ids) =>
  ids.map(id => getResource(resourcesById, id))
