import { v4 } from 'uuid';
import getSubjects from '../api/subjects';

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

export const addNewResource = (title, url) => ({
  type: 'ADD_NEW_RESOURCE',
  [v4()]: {
    title,
    url,
  }
});

// export const addNewSubject = (subject, resources) => ({
//   type: 'ADD_NEW_SUBJECT',
//   id: v4(),
//   subject,
//   resources,
// });
