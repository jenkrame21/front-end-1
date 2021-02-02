import { combineReducers } from 'redux';
import userReducer from './userReducer';
import classReducer from './classReducer';

const rootReducer = combineReducers({
    user: userReducer,
    classes: classReducer
});

export default rootReducer;