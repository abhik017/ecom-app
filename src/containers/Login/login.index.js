import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginForm from './login-form';
import { userLoginRequest, isJwtExpired } from '../../actions/login.action';
import { getLoginResponse } from '../../reducers/login.reducer';

class Login extends React.Component{
    constructor(props) {
        super(props);
    }

    onSubmit = userData => {
        this.props.dispatch((userLoginRequest(userData, null)));
    }

    render() {
        return (
            <LoginForm onSubmit={this.onSubmit} history={this.props.history}/>
        );
    }
}
const mapStateToProps = state => {
    return {
        loginResponse: getLoginResponse(state)
    };
}

export default connect(mapStateToProps)(withRouter(Login));