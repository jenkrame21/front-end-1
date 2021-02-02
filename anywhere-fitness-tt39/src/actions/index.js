import axiosWithAuth from '../utils/axiosWithAuth';

// Post User Call
export const START_USER_CALL = "START_POST_LOGIN_CALL";
export const POST_USER_SUCCESS = "POST_LOGIN_SUCCESS";
export const POST_USER_FAILURE = "POST_LOGIN_FAILURE";

// Get Class Call
export const START_GET_CLASSES_CALL = "START_GET_CLASSES_CALL";
export const GET_CLASSES_SUCCESS = "GET_CLASSES_SUCCESS";
export const GET_CLASSES_FAILURE = "GET_CLASSES_FAILURE";

// Post Class Call
export const START_ADDING_CLASS = "START_ADDING_CLASS";
export const ADD_CLASS_SUCCESS = "ADD_CLASS_SUCCESS";
export const ADD_CLASS_FAILURE = "ADD_CLASS_FAILURE";

// Login action:
export const postLogin = (login) => (dispatch) => {
    dispatch({ type: START_USER_CALL });

    // Add axios
    axiosWithAuth()
        .post('/auth/login', login)
        .then((res) => {
            localStorage.setItem('token', res.data.token);
            console.log("Post User Success: ", res.data.token);
            dispatch({ type: POST_USER_SUCCESS, payload: res.data.user });
        })
        .catch((err) => {
            console.log("Post User Failure: ", err.message);
            dispatch({ type: POST_USER_FAILURE, payload: err.message });
        });
};

// Register action:
export const postSignup = (signup) => (dispatch) => {
    dispatch({ type: START_USER_CALL });

    // Add axios
    axiosWithAuth()
        .post('/auth/register', signup)
        .then((res) => {
            console.log("Post User Success: ", res.data);
            dispatch({ type: POST_USER_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log("Post User Failure: ", err.message);
            dispatch({ type: POST_USER_FAILURE, payload: err.message });
        });
};

// Getting classes action:
export const getClasses = () => (dispatch) => {
    dispatch({ type: START_GET_CLASSES_CALL });

    axiosWithAuth()
        .get('/classes')
        .then((res) => {
            console.log("Get Classes Action Success: ", res);
            dispatch({ type: GET_CLASSES_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log("Get Classes Action Error: ", err.message);
            dispatch({ type: GET_CLASSES_FAILURE, payload: err.message });
        });
};

// Posting new class action:
export const postClass = (newClass) => (dispatch) => {
    dispatch({ type: START_ADDING_CLASS });

    axiosWithAuth()
        .post('/classes', newClass)
        .then((res) => {
            console.log("Post Class Action Success: ", res);
            dispatch({ type: ADD_CLASS_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log("Post Class Action Error: ", err.message);
            dispatch({ type: ADD_CLASS_FAILURE, payload: err.message });
        });
};

// Update class action:
export const updateClass = () => (dispatch) => {
    dispatch({ type: "UPDATE_CLASS" })

    axiosWithAuth()
        .put('')
};

// Delete class action:
export const deleteClass = (id) => (dispatch) => {
    dispatch({ type: "DELETE_CLASS" });

    // Add axios
    axiosWithAuth()
        .delete(`/classes/${id}`)
        .then((res) => {
            console.log("Delete Class Success: ", res.data);
        })
        .catch((err) => {
            console.log("Delete Class Failure: ", err.message);
        });
};