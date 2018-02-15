import { RECEIVE_FACE } from '../actions/types'
import shortid from 'shortid'

const screenshotsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_FACE:
      return [ ...state, {
        id: shortid.generate(),
        face: action.face,
        receivedAt: action.receivedAt,
        src: action.screenshot }]
    default:
      return state
  }
}

export default screenshotsReducer
