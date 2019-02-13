import { combineReducers } from 'redux'
import ads from './AdsFetched'
import ad from './AdFetched'

export default combineReducers({
  ads,
  ad
})