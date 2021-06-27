import { postApi } from '../utils/api-caller';
import { AUTH_BASE_URL } from '../utils/url-constants';
import { showErrorMessage, showSuccessMessage } from '../utils/util';

export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_ERROR = 'USER_SIGNUP_ERROR';
export const USER_VERIFY_REQUEST = 'USER_VERIFY_REQUEST';
export const USER_VERIFY_SUCCESS = 'USER_VERIFY_SUCCESS';
export const USER_VERIFY_ERROR = 'USER_VERIFY_ERROR';
export const USER_RESEND_OTP_REQUEST = 'USER_RESEND_OTP_REQUEST';
export const USER_RESEND_OTP_REQUEST_SUCCESS = 'USER_RESEND_OTP_REQUEST_SUCCESS';
export const USER_RESEND_OTP_REQUEST_ERROR = 'USER_RESEND_OTP_REQUEST_ERROR';
export const CHANGE_OTP_REQUEST_STATUS = 'CHANGE_OTP_REQUEST_STATUS';
export function userSignupRequest(userData) {
    return async (dispatch) => {
        try {
            dispatch({type: USER_SIGNUP});
            const response = await postApi('/v0/signup/', userData, AUTH_BASE_URL);
            dispatch({type: USER_SIGNUP_SUCCESS, payload: response.data});
            showSuccessMessage("Account creation successful! Verify account with the OTP within 5 minutes sent on your email address!");
        } catch(err) {
            console.log(err);
            dispatch({type: USER_SIGNUP_ERROR, payload: err});
            showErrorMessage(err.toString());
        }
    }
}

export function userVerifyAccountRequest(req) {
    return async (dispatch) => {
        try {
            dispatch({type: USER_VERIFY_REQUEST});
            const response = await postApi('/v0/verify-account/', req, AUTH_BASE_URL);
            dispatch({type: USER_VERIFY_SUCCESS, payload: response.data});
            showSuccessMessage("Account verified!");
        } catch(err) {
            console.log(err);
            dispatch({type: USER_VERIFY_ERROR, payload: err});
            showErrorMessage(err.toString());
        }
    }
}

export function userResendVerificationCodeRequest(req) {
    return async (dispatch) => {
        try {
            dispatch({type: USER_RESEND_OTP_REQUEST});
            const response = await postApi('/v0/resend-verification-code', req, AUTH_BASE_URL);
            dispatch({type: USER_RESEND_OTP_REQUEST_SUCCESS, payload: response.data});
            showSuccessMessage("Verification code sent, verify within 5 minutes!");
        } catch(err) {
            console.log(err);
            dispatch({type: USER_RESEND_OTP_REQUEST_ERROR, payload: err});
            showErrorMessage(err.toString());
        }
    }
}

export function changeResendOtpRequestStatus() {
    return dispatch => {
        dispatch({type: CHANGE_OTP_REQUEST_STATUS});
    }
}