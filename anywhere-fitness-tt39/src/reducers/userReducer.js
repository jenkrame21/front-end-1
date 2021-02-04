import {
    // USER/INSTRUCTOR - Login/Logout
    START_USER_CALL,
    POST_USER_SUCCESS,
    POST_USER_FAILURE,
    USER_LOGOUT
} from '../actions/index';

const initialState = {
    //grabs user info from local storage if it's there (so it survives a page refresh)
    user: JSON.parse(window.localStorage.getItem('userInfo')) || {},
    isLoading: false,
    addingError: '',
    isLoggedIn: window.localStorage.getItem('token')
}

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case START_USER_CALL:
            return  {
                ...state,
                isLoading: true,
                addingError: '',
                isLoggedIn: false
            }
        case POST_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                isLoggedIn: true
            }
        case POST_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                addingError: action.payload,
                isLoggedIn: false
            }
        case USER_LOGOUT:
            return {
                user: {},
                isLoading: false,
                addingError: '',
                isLoggedIn: false
            }
        default:
            return state
    };
};

export default userReducer;