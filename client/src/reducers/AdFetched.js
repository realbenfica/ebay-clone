import {AD_FETCHED} from '../actions/ads'

export default function (state = null, action) {
  switch(action.type) {
    case AD_FETCHED:
      return action.ad    
    default:
      return state
  }
}