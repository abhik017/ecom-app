import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import login from './reducers/login.reducer';
import signup from './reducers/signup.reducer';
import forgotPassword from './reducers/forgot-password.reducer';

export default combineReducers({
    login,
    forgotPassword,
    signup,
    form: formReducer,
});