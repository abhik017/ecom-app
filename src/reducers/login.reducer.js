import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    VERIFY_JWT_ERROR,
    VERIFY_JWT_SUCCESS,
    VERIFY_JWT
} from '../actions/login.action';

const initialState = {
    loginResponse: {},
    resetResponse: {},
    isJwtExpired: true,
    error: ''
};

const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGIN:
        case VERIFY_JWT:
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
        case VERIFY_JWT_SUCCESS:
            return {
                ...state,
                isJwtExpired: false
            }
        case VERIFY_JWT_ERROR:
            return {
                ...state,
                isJwtExpired: true
            }
        default:
            return state;
    }
}

export const getLoginResponse = state => state.login.loginResponse;
export const jwtExpiryStatus = state => state.login.isJwtExpired;

export default AppReducer;