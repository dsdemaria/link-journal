import _subjects from './subjects.json'

const DEFAULT_TIMEOUT = 100;

const getSubjects = (cb, timeout) => {
  setTimeout(() => cb(_subjects), timeout || DEFAULT_TIMEOUT )
}

export default getSubjects
