import { v4 } from 'uuid';

// state = {
//   "subjects": [
//       {
//         "subject": "Functional Programming Basics",
//         "resources": [
//           {
//             "title": "Thinking in React",
//             "url": "https://facebook.github.io/react/docs/thinking-in-react.html"
//           }
//         ]
//       }
//     ]
//   }

export const addNewResource = (title, url) => ({
  type: 'ADD_NEW_RESOURCE',
  id: v4(),
  title,
  url,
});

export const addNewSubject = (subject, resources) => ({
  type: 'ADD_NEW_SUBJECT',
  id: v4(),
  subject,
  resources,
});
