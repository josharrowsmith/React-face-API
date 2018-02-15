import { RECEIVE_EMOTION } from '../actions/types'
import shortid from 'shortid'

const EmotionReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_EMOTION:
      return [ ...state, {
        id: shortid.generate(),
        emotion: action.emotion,
        receivedAt: action.receivedAt,
        src: action.screenshot }]
    default:
      return state
  }
}

export default EmotionReducer
