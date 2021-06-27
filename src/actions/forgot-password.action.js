import { postApi } from "../utils/api-caller";
import { AUTH_BASE_URL } from "../utils/url-constants";
import { showErrorMessage, showSuccessMessage } from '../utils/util';

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_REQUEST_SUCCESS = 'FORGOT_PASSWORD_REQUEST_SUCCESS';
export const FORGOT_PASSWORD_REQUEST_ERROR = 'FORGOT_PASSWORD_REQUEST_ERROR';
export const SUBMIT_VERIFICATION_CODE = 'SUBMIT_VERIFICATION_CODE';
export const SUBMIT_VERIFICATION_CODE_SUCCESS = 'SUBMIT_VERIFICATION_CODE_SUCCESS';
export const SUBMIT_VERIFICATION_CODE_ERROR = 'SUBMIT_VERIFICATION_CODE_ERROR';
export const SUBMIT_PASSWORD = 'SUBMIT_PASSWORD';
export const SUBMIT_PASSWORD_SUCCESS = 'SUBMIT_PASSWORD_SUCCESS';
export const SUBMIT_PASSWORD_ERROR = 'SUBMIT_PASSWORD_ERROR';
export const CHANGE_FORGOT_PASS_OTP_REQUEST_STATUS  = 'CHANGE_FORGOT_PASS_OTP_REQUEST_STATUS';

export function userForgotPasswordRequest(req) {
    return async (dispatch) => {
        try {
            dispatch({type: FORGOT_PASSWORD_REQUEST});
            const response = await postApi('/v0/forgot-password/send-verification-code', req, AUTH_BASE_URL);
            dispatch({type: FORGOT_PASSWORD_REQUEST_SUCCESS, payload: response.data});
            showSuccessMessage('OTP sent to the email ID!');
        } catch(err) {
            console.log(err);
            dispatch({type: FORGOT_PASSWORD_REQUEST_ERROR, payload: err});
            showErrorMessage('Could not send the change password request!');
        }
    }
}

export function userSubmitVerificationCode(req) {
    return async (dispatch) => {
        try {
            dispatch({type: SUBMIT_VERIFICATION_CODE});
            const response = await postApi('/v0/forgot-password/verify', req, AUTH_BASE_URL);
            dispatch({type: SUBMIT_VERIFICATION_CODE_SUCCESS, payload: response.data});
            showSuccessMessage('User verified!');
        } catch(err) {
            console.log(err);
            dispatch({type: SUBMIT_VERIFICATION_CODE_ERROR, payload: err});
            showErrorMessage('Could not verify the user!');
        }
    }
}

export function userSubmitChangePassword(req) {
    return async (dispatch) => {
        try {
            const accessToken = JSON.parse(localStorage.getItem('changePasswordAccessToken')).accessToken;
            req['accessToken'] = accessToken;
            dispatch({type: SUBMIT_PASSWORD});
            const response = await postApi('/v0/forgot-password/change-password/', req, AUTH_BASE_URL);
        dispatch({type: SUBMIT_PASSWORD_SUCCESS, payload: response.data});
            showSuccessMessage('Password Changed!');
        } catch (err) {
            console.log(err);
            dispatch({type: SUBMIT_PASSWORD_ERROR, payload: err});
            showErrorMessage('Could not change the password!');
        }
    }
}

export function changeForgotPasswordOtpStatus() {
    return dispatch => {
        dispatch({type: CHANGE_FORGOT_PASS_OTP_REQUEST_STATUS});
    }
}