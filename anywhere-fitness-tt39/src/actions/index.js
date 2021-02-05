import axiosWithAuth from '../utils/axiosWithAuth';

// userReducer
// USER/INSTRUCTOR - Login/Logout
export const START_USER_CALL = "START_POST_LOGIN_CALL";
export const POST_USER_SUCCESS = "POST_LOGIN_SUCCESS";
export const POST_USER_FAILURE = "POST_LOGIN_FAILURE";
export const USER_LOGOUT = "USER_LOGOUT";

// classReducer
// USER/INSTRUCTOR - Get All Classes
export const START_GET_CLASSES_CALL = "START_GET_CLASSES_CALL";
export const GET_CLASSES_SUCCESS = "GET_CLASSES_SUCCESS";
export const GET_CLASSES_FAILURE = "GET_CLASSES_FAILURE";

// USER - Get Class by User ID - Saved Classes
export const GET_CLASS_BY_USER_ID_CALL = "GET_CLASS_BY_USER_ID_CALL";
export const GET_CLASS_BY_USER_ID_SUCCESS = "GET_CLASS_BY_USER_ID_SUCCESS";
export const GET_CLASS_BY_USER_ID_FAILURE = "GET_CLASS_BY_USER_ID_FAILURE";

// INSTRUCTOR - Get Users by Class ID - Punch Card
export const GET_USERS_BY_CLASS_BY_ID_CALL = "GET_USERS_BY_CLASS_BY_ID_CALL";
export const GET_USERS_BY_CLASS_BY_ID_SUCCESS = "GET_USERS_BY_CLASS_BY_ID_SUCCESS";
export const GET_USERS_BY_CLASS_BY_ID_FAILURE = "GET_USERS_BY_CLASS_BY_ID_FAILURE";

// INSTRUCTOR - Add New Class
export const START_ADDING_CLASS = "START_ADDING_CLASS";
export const ADD_CLASS_SUCCESS = "ADD_CLASS_SUCCESS";
export const ADD_CLASS_FAILURE = "ADD_CLASS_FAILURE";

// INSTRUCTOR - Add User To Class
export const START_ADD_USER_TO_CLASS = "START_ADD_USER_TO_CLASS"
export const ADD_USER_TO_CLASS_SUCCESS = "ADD_USER_TO_CLASS_SUCCESS"
export const ADD_USER_TO_CLASS_FAIL = "ADD_USER_TO_CLASS_FAIL"
// export const INCREMENT

// INSTRUCTOR - Update Class
export const START_UPDATE_CLASS_CALL = "START_UPDATE_CLASS_CALL";
export const UPDATE_CLASS_SUCCESS = "UPDATE_CLASS_SUCCESS";
export const UPDATE_CLASS_FAILURE = "UPDATE_CLASS_FAILURE";

// INSTRUCTOR - Delete Class
export const START_DELETE_CLASS_CALL = "START_DELETE_CLASS_CALL";
export const DELETE_CLASS_SUCCESS = "DELETE_CLASS_SUCCESS";
export const DELETE_CLASS_FAILURE = "DELETE_CLASS_FAILURE";

//USER - Delete User from Class
export const START_DELETE_USER_CLASS_CALL = 'START_DELETE_USER_CLASS_CALL'
export const DELETE_USER_CLASS_SUCCESS = 'DELETE_USER_CLASS_SUCCESS'
export const DELETE_USER_CLASS_FAILURE = 'DELETE_USER_CLASS_FAILURE'


// USER/INSTRUCTOR - Login action:
export const postLogin = (login) => (dispatch) => {
    // removes current token and userInfo, if previously logged in
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('userInfo');
    dispatch({ type: START_USER_CALL });

    axiosWithAuth()
        .post('/auth/login', login)
        .then((res) => {
            //setting token and userInfo to local storage
            window.localStorage.setItem('token', res.data.token);
            window.localStorage.setItem('userInfo', JSON.stringify(res.data.user))
            // console.log("Post User Success: ", res.data.user.role);
            dispatch({ type: POST_USER_SUCCESS, payload: res.data.user });
        })
        .catch((err) => {
            // console.log("Post User Failure: ", err.message);
            dispatch({ type: POST_USER_FAILURE, payload: err.message });
        });
};

// USER/INSTRUCTOR - Logout action:
export const logout = () => (dispatch) => {
    //Removing token and user Info
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('userInfo');
    dispatch({ type: USER_LOGOUT });
}

// USER/INSTRUCTOR - Signup action:
export const postSignup = (signup) => (dispatch) => {
    dispatch({ type: START_USER_CALL });

    axiosWithAuth()
        .post('/auth/register', signup)
        .then((res) => {
            console.log("Post User Success: ", res.data);
            dispatch({ type: POST_USER_SUCCESS, payload: res.data });
            window.location.href = '/login'
        })
        .catch((err) => {
            console.log("Post User Failure: ", err.message);
            dispatch({ type: POST_USER_FAILURE, payload: err.message });
        });
};

// USER/INSTRUCTOR - Get all classes action:
export const getClasses = () => (dispatch) => {
    dispatch({ type: START_GET_CLASSES_CALL });

    axiosWithAuth()
        .get('/classes')
        .then((res) => {
            // console.log("Get All Classes Action Success: ", res.data);
            dispatch({ type: GET_CLASSES_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log("Get Classes Action Error: ", err.message);
            dispatch({ type: GET_CLASSES_FAILURE, payload: err.message });
        });
};

// USER/INSTRUCTOR(?) - Get Class by User ID action:
export const getClassByUserId = (id) => (dispatch) => {
    dispatch({ type: GET_CLASS_BY_USER_ID_CALL });

    axiosWithAuth()
        .get(`/user_classes/user/${id}`)
        .then((res) => {
            console.log("Get Class by id Success: ", res.data);
            dispatch({ type: GET_CLASS_BY_USER_ID_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log("Get Class by id Failure: ", err.message);
            dispatch({ type: GET_CLASS_BY_USER_ID_FAILURE, payload: err.message });
        });
};

// USER/INSTRUCTOR(?) - Get Users by Class ID action:
export const getUsersByClassById = (id) => (dispatch) => {
    dispatch({ type: GET_USERS_BY_CLASS_BY_ID_CALL });

    axiosWithAuth()
        .get(`/user_classes/class/${id}`)
        .then((res) => {
            console.log("Get Class by id Success: ", res.data);
            dispatch({ type: GET_USERS_BY_CLASS_BY_ID_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log("Get Class by id Failure: ", err.message);
            dispatch({ type: GET_USERS_BY_CLASS_BY_ID_FAILURE, payload: err.message });
        });
};

// INSTRUCTOR - Add new class action:
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

// USER - Add user to class action:
export const addUserToClass = (idObject) => (dispatch) => {
    dispatch({ type: START_ADD_USER_TO_CLASS });
    axiosWithAuth()
        .post('/user_classes', idObject)
        .then((res) => {
            dispatch({ type: ADD_USER_TO_CLASS_SUCCESS, payload: res.data.data });
            // If time axios to increase attendees
        })
        //Finish this later
        .catch((err) => {
            console.log(err)
            dispatch({ type: ADD_USER_TO_CLASS_FAIL, payload: err });
        });
};


// INSTRUCTOR - Update class action:
export const updateClass = (id, update) => (dispatch) => {
    dispatch({ type: START_UPDATE_CLASS_CALL })

    axiosWithAuth()
        .put(`/classes/${id}`, update )
        .then((res) => {
            console.log("Update Class Success: ", res.data);
            dispatch({ type: UPDATE_CLASS_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log("Update Class Failure: ", err.message);
            dispatch({ type: UPDATE_CLASS_FAILURE, payload: err.message });
        })
};

// INSTRUCTOR - Delete class action:
export const deleteClass = (id) => (dispatch) => {
    dispatch({ type: START_DELETE_CLASS_CALL });

    axiosWithAuth()
        .delete(`/classes/${id}`)
        .then((res) => {
            console.log("Delete Class Success: ", res.data);
            dispatch({ type: DELETE_CLASS_SUCCESS, payload: id })
        })
        .catch((err) => {
            console.log("Delete Class Failure: ", err.message);
            dispatch({ type: DELETE_CLASS_FAILURE, payload: err.message })
        });
};

// USER - Delete user from class action:
export const deleteUserClass = (idObject) => (dispatch) => {
    dispatch({ type: START_DELETE_USER_CLASS_CALL });
    
    axiosWithAuth()
        .delete(`/user_classes/`, { data: idObject })
        .then((res) => {
            console.log("Delete Class Success: ", res.data);
            dispatch({ type: DELETE_USER_CLASS_SUCCESS, payload: idObject.class_id })
        })
        .catch((err) => {
            console.log('our id object: ', idObject)
            console.log("Delete Class Failure: ", err.message);
            dispatch({ type: DELETE_USER_CLASS_FAILURE })
        });
};