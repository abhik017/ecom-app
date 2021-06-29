import { postApi, getApi } from "../utils/api-caller";
import { AUTH_BASE_URL, DATA_BASE_URL } from "../utils/url-constants";
import { showErrorMessage, showSuccessMessage } from '../utils/util';

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
export const VERIFY_JWT_SUCCESS = "VERIFY_JWT_SUCCESS";
export const VERIFY_JWT_ERROR = "VERIFY_JWT_ERROR";
export const VERIFY_JWT = "VERIFY_JWT";

export function userLoginRequest(loginReq) {
    return async (dispatch) => {
        try {
            dispatch({type: USER_LOGIN});
            const response = await postApi('/v0/login', loginReq, AUTH_BASE_URL);
            localStorage.setItem('loginResponse', JSON.stringify(response.data));
            dispatch({type: USER_LOGIN_SUCCESS, payload: response.data});
            showSuccessMessage('Login Successful');
            window.location.reload();
        } catch(err) {
            console.log(err);
            dispatch({type: USER_LOGIN_ERROR, payload: err});
            showErrorMessage('Error while logging in!');
        }
    }
}

export function isJwtExpired() {
    return async (dispatch) => {
        try {
            dispatch({type: VERIFY_JWT});
            const response = await getApi('/', DATA_BASE_URL);
            dispatch({type: VERIFY_JWT_SUCCESS, payload: response.data});
        } catch(err) {
            try {
                const loginResponse = JSON.parse(localStorage.getItem('loginResponse'));
                const refreshToken = loginResponse && loginResponse.refreshToken;
                if( !refreshToken ) {
                    throw Error("Cannot log in the user!");
                }
                const newLoginResponse = await postApi('/verify-refresh-token', {refreshToken: refreshToken}, DATA_BASE_URL);
                localStorage.setItem('loginResponse', JSON.stringify(newLoginResponse.data));
                window.location.reload();
            } catch(err) {
                console.log(err.message);
                dispatch({type: VERIFY_JWT_ERROR, payload: err.message});
            }
        }
    }
}