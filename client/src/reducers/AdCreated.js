import {AD_CREATED} from '../actions/ads'

export default function (state = null, action) {
  switch(action.type) {
    case AD_CREATED:
      return [action.event, ...state]
    default:
      return state
  }
}
