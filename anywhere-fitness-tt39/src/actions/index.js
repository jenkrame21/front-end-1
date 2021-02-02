import axios from 'axios';

// Post Login Call
export const START_POST_LOGIN_CALL = "START_POST_LOGIN_CALL";
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS";
export const POST_LOGIN_FAILURE = "POST_LOGIN_FAILURE";

// Post Signup Call
export const START_POST_SIGNUP_CALL = "START_POST_SIGNUP_CALL";
export const POST_SIGNUP_SUCCESS = "POST_SIGNUP_SUCCESS";
export const POST_SIGNUP_FAILURE = "POST_SIGNUP_FAILURE";

// Get Class Call
export const START_GET_CLASSES_CALL = "START_GET_CLASSES_CALL";
export const GET_CLASSES_SUCCESS = "GET_CLASSES_SUCCESS";
export const GET_CLASSES_FAILURE = "GET_CLASSES_FAILURE";

// Post Class Call
export const START_ADDING_CLASS = "START_ADDING_CLASS";
export const ADD_CLASS_SUCCESS = "ADD_CLASS_SUCCESS";
export const ADD_CLASS_FAILURE = "ADD_CLASS_FAILURE";

// Login action:
export const postLogin = () => (dispatch) => {
    dispatch({ type: "START_POST_LOGIN_CALL" });

    // Add axios
};

// Register action:
export const postSignup = () => (dispatch) => {
    dispatch({ type: "START_POST_SIGNUP" });

    // Add axios
};

// Getting classes action:
export const getClasses = () => (dispatch) => {
    dispatch({ type: START_GET_CLASSES_CALL });

    axios.get('https://anywhere-fitness-tt42.herokuapp.com/api/classes')
        .then((res) => {
            console.log("Get Classes Action Success: ", res);
            dispatch({ type: GET_CLASSES_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log("Get Classes Action Error: ", err.message);
            dispatch({ type: GET_CLASSES_FAILURE, payload: err.message });
        })
};

// Posting new class action:
export const postClass = (newClass) => (dispatch) => {
    dispatch({ type: START_ADDING_CLASS })

    // 
    axios.post('https://anywhere-fitness-tt42.herokuapp.com/api/classes', newClass)
        .then((res) => {
            console.log("Post Class Action Success: ", res);
            dispatch({ type: ADD_CLASS_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log("Post Class Action Error: ", err.message);
            dispatch({ type: ADD_CLASS_FAILURE, payload: err.message });
        })
};

// Maybe a delete call action?