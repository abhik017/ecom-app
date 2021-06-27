import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import ForgotPasswordRequestForm from './forgot-password-request-form';
import VerificationCodeSubmitForm from './verification-code-submit-form';
import ChangePasswordSubmitForm from './change-password-submit-form';
import { changePasswordAccessToken, getRequestStatus, getTokenStatus } from '../../reducers/forgot-password.reducer';
import { userForgotPasswordRequest, userSubmitChangePassword, userSubmitVerificationCode } from '../../actions/forgot-password.action';
class ForgotPassword extends React.Component{
    constructor(props) {
        super(props);
    }

    onSubmit = userData => {
        if(!this.props.hasRequestBeenSent && !this.props.hasTokenBeenRecieved) {
            this.props.dispatch(userForgotPasswordRequest(userData));
            this.props.history.push('/forgot-password/');
        } else if(!this.props.hasTokenBeenRecieved && this.props.hasRequestBeenSent) {
            this.props.dispatch(userSubmitVerificationCode(userData));
            this.props.history.push('/forgot-password/');
        } else {
            this.props.dispatch(userSubmitChangePassword(userData));
            this.props.history.push('/');
        }
        
    }

    render() {
        console.log(this.props.hasRequestBeenSent);
        return (
            (
                (!this.props.hasRequestBeenSent && !this.props.hasTokenBeenRecieved) ?
                <ForgotPasswordRequestForm onSubmit={this.onSubmit} history={this.props.history} /> :
                (
                    (!this.props.hasTokenBeenRecieved && this.props.hasRequestBeenSent) ?
                    <VerificationCodeSubmitForm onSubmit={this.onSubmit} history={this.props.history} /> :
                    <ChangePasswordSubmitForm onSubmit={this.onSubmit} history={this.props.history} />
                )
            )
        );
    }
}
const mapStateToProps = state => {
    return {
        changePasswordAccessToken: changePasswordAccessToken(state),
        hasRequestBeenSent: getRequestStatus(state),
        hasTokenBeenRecieved: getTokenStatus(state)
    };
}

export default connect(mapStateToProps)(withRouter(ForgotPassword));