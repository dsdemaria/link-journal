import { addNewResource } from '../../actions/index.js'
import { v4 } from 'uuid'

describe('actions', () => {
  it('Should create an action to add a new resource.', () => {
    const someTitle = 'Some title'
    const someUrl = 'www.something.com'
    const expectedAction = {
      type: 'ADD_NEW_RESOURCE',
      [v4()]: {
        title: someTitle,
        url: someUrl,
      }
    }
    expect(addNewResource(someTitle, someUrl)).toEqual(expectedAction)
  })
})
