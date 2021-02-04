import {
    START_GET_CLASSES_CALL,
    GET_CLASSES_SUCCESS,
    GET_CLASSES_FAILURE,
    GET_CLASS_BY_USER_ID_CALL,
    GET_CLASS_BY_USER_ID_SUCCESS,
    GET_CLASS_BY_USER_ID_FAILURE,
    GET_USERS_BY_CLASS_BY_ID_CALL,
    GET_USERS_BY_CLASS_BY_ID_SUCCESS,
    GET_USERS_BY_CLASS_BY_ID_FAILURE,
    START_ADDING_CLASS,
    ADD_CLASS_SUCCESS,
    ADD_CLASS_FAILURE,
    START_ADD_USER_TO_CLASS,
    ADD_USER_TO_CLASS_SUCCESS,
    ADD_USER_TO_CLASS_FAIL,
    START_UPDATE_CLASS_CALL,
    UPDATE_CLASS_SUCCESS,
    UPDATE_CLASS_FAILURE,
    START_DELETE_CLASS_CALL,
    DELETE_CLASS_SUCCESS,
    DELETE_CLASS_FAILURE
} from '../actions/index';

const initialState = {
    classes: [],
    isLoading: true,
    loadingError: '',
    addingError: '',
    saved_classes: [],
    class_attendees: []
};

const classReducer = (state = initialState, action) => {
    switch (action.type) {
        // GET ALL CLASSES //
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
        // FIX BELOW //
        // GET CLASS BY ID - SAVED CLASS USER //
        case GET_CLASS_BY_USER_ID_CALL:
            return {
                ...state,
                isLoading: true,
                loadingError: ''
            }
        case GET_CLASS_BY_USER_ID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                saved_classes: action.payload
            }
        case GET_CLASS_BY_USER_ID_FAILURE:
            return {
                ...state,
                isLoading: false,
                loadingError: action.payload
            }
        // GET Users BY Class ID - //
            case GET_USERS_BY_CLASS_BY_ID_CALL:
                return {
                    ...state,
                    isLoading: true,
                    loadingError: ''
                }
            case GET_USERS_BY_CLASS_BY_ID_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    class_attendees: action.payload
                }
            case GET_USERS_BY_CLASS_BY_ID_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    loadingError: action.payload
                }
        // ADD CLASS //
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
                classes: [...state.classes, action.payload],
                isLoading: false
            }
        case ADD_CLASS_FAILURE:
            return {
                ...state,
                isLoading: false,
                addingError: action.payload
            }
        // ADD USER TO CLASS //
            case START_ADD_USER_TO_CLASS:
            return {
                ...state,
                isLoading: true,
                loadingError: '',
                addingError: ''
            }
        case ADD_USER_TO_CLASS_SUCCESS:
            return {
                ...state,
                saved_classes: [...state.saved_classes, action.payload],
                isLoading: false
            }
        case ADD_USER_TO_CLASS_FAIL:
            return {
                ...state,
                isLoading: false,
                addingError: action.payload
            }
        // UPDATE CLASS //
        case START_UPDATE_CLASS_CALL:
            return {
                ...state,
                classes: [
                    ...state.classes
                ]
            }
        case UPDATE_CLASS_SUCCESS:
            return {
                ...state,
                classes: [
                    ...state.classes
                ]
            }
        case UPDATE_CLASS_FAILURE:
            return {
                ...state,
                classes: [
                    ...state.classes
                ]
            }
        // DELETE CLASS //
        case START_DELETE_CLASS_CALL:
            return {
                ...state,
                classes: [
                    ...state.classes
                ]
            }
        case DELETE_CLASS_SUCCESS:
            return {
                ...state,
                classes: [
                    ...state.classes
                ]
            }
        case DELETE_CLASS_FAILURE:
            return {
                ...state,
                classes: [
                    ...state.classes
                ]
            }
        default:
            return state
    };
};

export default classReducer;