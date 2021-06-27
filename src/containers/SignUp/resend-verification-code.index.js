import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ResendVerificationCodeForm from './resend-verification-code-form';
import VerifyAccountForm from './verify-account-form';
import { userResendVerificationCodeRequest, userVerifyAccountRequest } from '../../actions/signup.action';
import { getResendOTPRequestStatus } from '../../reducers/signup.reducer';

class Signup extends React.Component{
    constructor(props) {
        super(props);
    }

    onSubmit = userData => {
        if(!this.props.hasResendOtpRequestBeenSent) {
            this.props.dispatch(userResendVerificationCodeRequest(userData));
            this.props.history.push('/verify-account/');
        } else {
            this.props.dispatch(userVerifyAccountRequest(userData));
            this.props.history.push('/');
        }
    }

    render() {
        return (
            (
                !this.props.hasResendOtpRequestBeenSent ?
                <ResendVerificationCodeForm onSubmit={this.onSubmit} history={this.props.history}/>:
                <VerifyAccountForm onSubmit={this.onSubmit} history={this.props.history}/>
            )
        );
    }
}
const mapStateToProps = state => {
    return {
        hasResendOtpRequestBeenSent: getResendOTPRequestStatus(state)
    };
}

export default connect(mapStateToProps)(withRouter(Signup));