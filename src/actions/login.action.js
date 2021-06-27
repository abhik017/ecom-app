import { postApi } from "../utils/api-caller";
import { AUTH_BASE_URL } from "../utils/url-constants";
import { showErrorMessage, showSuccessMessage } from '../utils/util';

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
export function userLoginRequest(loginReq) {
    return async (dispatch) => {
        try {
            dispatch({type: USER_LOGIN});
            const response = await postApi('/v0/login', loginReq, AUTH_BASE_URL);
            dispatch({type: USER_LOGIN_SUCCESS, payload: response.data});
            showSuccessMessage('Login Successful');
        } catch(err) {
            console.log(err);
            dispatch({type: USER_LOGIN_ERROR, payload: err});
            showErrorMessage('Error while logging in!');
        }
    }
}