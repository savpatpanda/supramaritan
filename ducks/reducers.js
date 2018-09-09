import { combineReducers } from 'redux';

export const loginReducer = (state = {user: {}}, action) => {
    switch (action.type) {
        case 'GET_INCIDENTS':
            return {
                ...state,
                incidents: action.response
            }
        case 'PUSH_IMAGE':
            return {
                ...state,
                base64 : action.base64
            }
        case 'SET_FORM':
            return {
                ...state,
                formVisible : action
            }
        case 'SET_AUTH':
            return {
                ...state,
                authVisible : action
            }
        case 'SET_DISTRESS':
            return{
                ...state,
                distressVisible : action
            }
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
	loginReducer, 
})



export default rootReducer;