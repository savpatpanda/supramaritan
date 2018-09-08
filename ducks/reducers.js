import { combineReducers } from 'redux';

export const loginReducer = (state = {user: {}}, action) => {
    console.log('itemsReducer was called with state', state, 'and action', action)

    switch (action.type) {
        case 'GET_INCIDENTS':
            return {
                ...state,
                incidents: action.response
            }
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
	loginReducer, 
})



export default rootReducer;