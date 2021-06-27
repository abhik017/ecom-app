import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR
} from '../actions/login.action';

const initialState = {
    loginResponse: {},
    resetResponse: {},
    error: ''
};

const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGIN:
            return {
            ...state,
            };
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loginResponse: action.payload,
                error: ''
            }
        case USER_LOGIN_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export const getLoginResponse = state => state.login.loginResponse;

export default AppReducer;