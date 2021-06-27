import { 
    USER_SIGNUP,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_ERROR,
    USER_VERIFY_REQUEST,
    USER_VERIFY_SUCCESS,
    USER_VERIFY_ERROR,
    USER_RESEND_OTP_REQUEST,
    USER_RESEND_OTP_REQUEST_ERROR,
    USER_RESEND_OTP_REQUEST_SUCCESS,
    CHANGE_OTP_REQUEST_STATUS
} from "../actions/signup.action";

const initialState = {
    error: {},
    hasResendOtpRequestBeenSent: false,
}

const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_SIGNUP:
        case USER_VERIFY_REQUEST:
        case USER_RESEND_OTP_REQUEST:
            return {
                ...state
            }
        case USER_SIGNUP_SUCCESS:
            return {
                ...state,
                hasResendOtpRequestBeenSent: true    
            }
        case USER_VERIFY_SUCCESS:
            return {
                ...state,
                // hasSignupRequestBeenSent: true
                hasResendOtpRequestBeenSent: false
            }
        case USER_SIGNUP_ERROR:
        case USER_VERIFY_ERROR:
        case USER_RESEND_OTP_REQUEST_ERROR:
            return {
                ...state,
                error: action.payload,
                hasResendOtpRequestBeenSent: false,
            }
        case USER_RESEND_OTP_REQUEST_SUCCESS:
            return {
                ...state,
                hasResendOtpRequestBeenSent: true
            }
        case CHANGE_OTP_REQUEST_STATUS:
            return {
                ...state,
                hasResendOtpRequestBeenSent: !state.hasResendOtpRequestBeenSent
            }
        default:
            return state;
    }
}

// export const getSignupRequestStatus = state => state.signup.hasSignupRequestBeenSent;
export const getResendOTPRequestStatus = state => state.signup.hasResendOtpRequestBeenSent;

export default AppReducer;