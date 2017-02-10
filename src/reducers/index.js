import { combineReducers } from 'redux';
import subjects from './addResource';

const rootReducer = combineReducers({
  subjects,
});

// import { v4 } from 'uuid';
//
// const rootReducer = () => {
//   return {
//     subjects: [
//       {
//         id: v4(),
//         subject: "Functional Programming Basics",
//         resources: [
//           {
//             id: v4(),
//             title: "Thinking in React",
//             url: "https://facebook.github.io/react/docs/thinking-in-react.html"
//           },
//           {
//             id: v4(),
//             title: "Something else",
//             url: "https://facebook.github.io/react/docs/thinking-in-react.html"
//           }
//         ]
//       }
//     ]
//   }
// };


export default rootReducer;
