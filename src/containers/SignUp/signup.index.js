import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignupForm from './signup-form';
import { userSignupRequest } from '../../actions/signup.action';

class Signup extends React.Component{
    constructor(props) {
        super(props);
    }

    onSubmit = userData => {
        this.props.dispatch((userSignupRequest(userData, null)));
        this.props.history.push('/verify-account/');
    }

    render() {
        return (
            <SignupForm onSubmit={this.onSubmit} history={this.props.history}/>
        );
    }
}
const mapStateToProps = state => {
    return {

    };
}

export default connect(mapStateToProps)(withRouter(Signup));