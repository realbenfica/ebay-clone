import { ADS_FETCHED} from '../actions/ads';

const reducer = (state = {}, action = {}) => {
    switch (action.type) {
        case ADS_FETCHED: 
        return action.ads
        default:
            return state
    }
}

export default reducer