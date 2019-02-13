import { TEMPLATE} from '../actions/template';

const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case TEMPLATE: 
        return [
        ...state,
        action.payload
        ]
        default:
            return state
    }
}

export default reducer