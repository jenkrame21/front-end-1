import {
    START_USER_CALL,
    POST_USER_SUCCESS,
    POST_USER_FAILURE,
} from '../actions/index';

const initialState = {
    user: {},
    isLoading: false,
    addingError: 'ERROR',
    isLoggedIn: window.localStorage.getItem('token')
}

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case START_USER_CALL:
            return  {
                ...state,
                isLoading: true,
                addingError: ''
            }
        case POST_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
        case POST_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                addingError: action.payload
            }
        default:
            return state
    };
};

export default userReducer;