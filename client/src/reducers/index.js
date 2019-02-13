import { combineReducers } from 'redux'
import ads from './AdsFetched'
import ad from './AdCreated'

export default combineReducers({
  ads,
  ad
})