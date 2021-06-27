import {
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_REQUEST_ERROR,
    FORGOT_PASSWORD_REQUEST_SUCCESS,
    SUBMIT_PASSWORD,
    SUBMIT_PASSWORD_ERROR,
    SUBMIT_PASSWORD_SUCCESS,
    SUBMIT_VERIFICATION_CODE,
    SUBMIT_VERIFICATION_CODE_ERROR,
    SUBMIT_VERIFICATION_CODE_SUCCESS,
    CHANGE_FORGOT_PASS_OTP_REQUEST_STATUS
} from '../actions/forgot-password.action';

const initialState = {
    accessToken: {},
    hasRequestBeenSent: false,
    hasTokenBeenReceived: false,
    error: ''
}

const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case FORGOT_PASSWORD_REQUEST:
        case SUBMIT_VERIFICATION_CODE:    
            return {
                ...state
            };
        case FORGOT_PASSWORD_REQUEST_SUCCESS:
            return {
                ...state,
                hasRequestBeenSent: true
            };
        case FORGOT_PASSWORD_REQUEST_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case SUBMIT_VERIFICATION_CODE_SUCCESS:
            localStorage.setItem('changePasswordAccessToken',
            JSON.stringify(action.payload));
            return {
                ...state,
                accessToken: action.payload,
                hasRequestBeenSent: true,
                hasTokenBeenReceived: true,
            };
        case SUBMIT_VERIFICATION_CODE_ERROR:
            return {
                ...state,
                hasRequestBeenSent: false,
                hasTokenBeenReceived: false,
                error: action.payload
            };
        case SUBMIT_PASSWORD:
            return {
                ...state
            }
        case SUBMIT_PASSWORD_SUCCESS:
            return {
                ...state,
                hasRequestBeenSent: false,
                hasTokenBeenReceived: false
            }
        case SUBMIT_PASSWORD_ERROR:
            return {
                ...state,
                hasTokenBeenReceived: false,
                hasRequestBeenSent: false
            }
        case CHANGE_FORGOT_PASS_OTP_REQUEST_STATUS: {
            return {
                ...state,
                hasRequestBeenSent: !state.hasRequestBeenSent
            }
        }
        default:
            return state;
    }
}

export const changePasswordAccessToken = state => state.forgotPassword.accessToken;
export const getRequestStatus = state => state.forgotPassword.hasRequestBeenSent;
export const getTokenStatus = state => state.forgotPassword.hasTokenBeenReceived;

export default AppReducer;