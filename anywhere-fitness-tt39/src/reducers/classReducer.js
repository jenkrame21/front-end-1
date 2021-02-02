import {
    START_GET_CLASSES_CALL,
    GET_CLASSES_SUCCESS,
    GET_CLASSES_FAILURE,
    START_ADDING_CLASS,
    ADD_CLASS_SUCCESS,
    ADD_CLASS_FAILURE,
    START_UPDATE_CLASS_CALL,
    UPDATE_CLASS_SUCCESS,
    UPDATE_CLASS_FAILURE,
    START_DELETE_CLASS_CALL,
    DELETE_CLASS_SUCCESS,
    DELETE_CLASS_FAILURE
} from '../actions/index';

const initialState = {
    classes: [],
    isLoading: false,
    loadingError: '',
    addingError: ''
};

const classReducer = (state = initialState, action) => {
    switch (action.type) {
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