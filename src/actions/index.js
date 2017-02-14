import { v4 } from 'uuid';

export const addNewResource = (title, url) => ({
  type: 'ADD_NEW_RESOURCE',
  id: v4(),
  title,
  url,
});

// export const addNewSubject = (subject, resources) => ({
//   type: 'ADD_NEW_SUBJECT',
//   id: v4(),
//   subject,
//   resources,
// });
