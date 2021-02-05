import {
    // USER/INSTRUCTOR - Get All Classes Call
    START_GET_CLASSES_CALL,
    GET_CLASSES_SUCCESS,
    GET_CLASSES_FAILURE,
    // USER/INSTRUCTOR(?) - Get Class by User ID
    GET_CLASS_BY_USER_ID_CALL,
    GET_CLASS_BY_USER_ID_SUCCESS,
    GET_CLASS_BY_USER_ID_FAILURE,
    // INSTRUCTOR - Get Users by Class ID
    GET_USERS_BY_CLASS_BY_ID_CALL,
    GET_USERS_BY_CLASS_BY_ID_SUCCESS,
    GET_USERS_BY_CLASS_BY_ID_FAILURE,
    // INSTRUCTOR - Add New Class
    START_ADDING_CLASS,
    ADD_CLASS_SUCCESS,
    ADD_CLASS_FAILURE,
    // INSTRUCTOR - Add User To Class
    START_ADD_USER_TO_CLASS,
    ADD_USER_TO_CLASS_SUCCESS,
    ADD_USER_TO_CLASS_FAIL,
    // INSTRUCTOR - Update Class
    START_UPDATE_CLASS_CALL,
    UPDATE_CLASS_SUCCESS,
    UPDATE_CLASS_FAILURE,
    // INSTRUCTOR - Delete Class
    START_DELETE_CLASS_CALL,
    DELETE_CLASS_SUCCESS,
    DELETE_CLASS_FAILURE,
    // USER - Delete User from Class
    START_DELETE_USER_CLASS_CALL,
    DELETE_USER_CLASS_SUCCESS,
    DELETE_USER_CLASS_FAILURE
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
        // USER/INSTRUCTOR - Get All Classes Call
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
        // FIX!!! - USER/INSTRUCTOR(?) - Get Class by User ID
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
        // INSTRUCTOR - Get Users by Class ID
        case GET_USERS_BY_CLASS_BY_ID_CALL:
            return {
                ...state,
                isLoading: true,
                loadingError: '',
                class_attendees: []
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
        // INSTRUCTOR - Add New Class
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
                classes: [
                    ...state.classes,
                    action.payload
                ],
                isLoading: false
            }
        case ADD_CLASS_FAILURE:
            return {
                ...state,
                isLoading: false,
                addingError: action.payload
            }
        // FIX!!! - INSTRUCTOR - Add User To Class
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
                saved_classes: [
                    ...state.saved_classes,
                    action.payload
                ],
                isLoading: false
            }
        case ADD_USER_TO_CLASS_FAIL:
            return {
                ...state,
                isLoading: false,
                addingError: action.payload
            }
        // FIX!!! - INSTRUCTOR - Update Class
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
        // INSTRUCTOR - Delete Class
        case START_DELETE_CLASS_CALL:
            return {
                ...state,
                isLoading: true,
                loadingError: '',
                addingError: ''
            }
        case DELETE_CLASS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                classes: state.classes.filter(item=> {
                    return item.class_id !== action.payload;
                })
            }
        case DELETE_CLASS_FAILURE:
            return {
                ...state,
                isLoading: false,
                addingError: action.payload
            }
        // USER - Delete User from Class
        case START_DELETE_USER_CLASS_CALL:
            return {
                ...state,
                isLoading: true,
                loadingError: '',
                addingError: ''
            }
        case DELETE_USER_CLASS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                saved_classes: state.saved_classes.filter(item=> {
                    return item.class_id !== action.payload;
                })
            }
        case DELETE_USER_CLASS_FAILURE:
            return {
                ...state,
                isLoading: false,
                addingError: action.payload
            }
        default:
            return state
    };
};

export default classReducer;