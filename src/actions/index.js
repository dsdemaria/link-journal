import { v4 } from 'uuid';
import getSubjects from '../api/subjects';

// send JSON to reducer to convert to normalized state
const receiveSubjects = subjects => ({
  type: 'RECEIVE_SUBJECTS',
  subjects,
})

// Mocking a grab from database
export const getAllSubjects = () => dispatch => {
  getSubjects(subjects => {
    dispatch(receiveSubjects(subjects))
  })
}

export const addSubject = (title, id) => ({
  type: 'ADD_SUBJECT',
  id: v4(),
  title
})

export const addNewResource = (title, url) => ({
  type: 'ADD_NEW_RESOURCE',
  id: v4(),
  title,
  url,
});
