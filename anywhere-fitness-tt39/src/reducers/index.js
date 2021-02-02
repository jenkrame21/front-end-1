import {
    START_POST_LOGIN_CALL,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_FAILURE,
    START_POST_SIGNUP_CALL,
    POST_SIGNUP_SUCCESS,
    POST_SIGNUP_FAILURE,
    START_GET_CLASSES_CALL,
    GET_CLASSES_SUCCESS,
    GET_CLASSES_FAILURE,
    START_ADDING_CLASS,
    ADD_CLASS_SUCCESS,
    ADD_CLASS_FAILURE
} from '../actions/index';

const initialState = {
    classes: [],
    isLoading: false,
    loadingError: '',
    addingError: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_POST_LOGIN_CALL:
            return {
                ...state,
                isLoading: true,
                addingError: ''
            }
            //FIX BELOW
        case POST_LOGIN_SUCCESS:
            return {

            }
        case POST_LOGIN_FAILURE:
            return {

            }
        case START_POST_SIGNUP_CALL:
            return {
                ...state,
                isLoading: true,
                addingError: ''                
            }
        case POST_SIGNUP_SUCCESS:
            return {

            }
        case POST_SIGNUP_FAILURE:
            return {

            }
        case START_GET_CLASSES_CALL:
            return {
                ...state,
                isLoading: true,
                loadingError: ''
            }
        case GET_CLASSES_SUCCESS:
            return {
                ...state,
                classes: action.payload,
                isLoading: false
            }
        case GET_CLASSES_FAILURE:
            return {
                ...state,
                isLoading: false,
                loadingError: action.payload
            }
        case START_ADDING_CLASS:
            return {
                ...state,
                isLoading: true,
                loadingError: '',
                addingError: ''
            }
        case ADD_CLASS_SUCCESS:
            return {
                ...state,
                classes: action.payload,
                isLoading: false
            }
        case ADD_CLASS_FAILURE:
            return {
                ...state,
                isLoading: false,
                addingError: action.payload
            }
        default:
            return state
    };
};

export default reducer;