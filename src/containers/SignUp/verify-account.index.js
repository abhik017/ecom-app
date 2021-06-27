import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VerifyAccountForm from './verify-account-form';
import { userVerifyAccountRequest } from '../../actions/signup.action';
import { getSignupRequestStatus } from '../../reducers/signup.reducer';

class VerifyAccount extends React.Component{
    constructor(props) {
        super(props);
    }

    onSubmit = userData => {
        this.props.dispatch((userVerifyAccountRequest(userData, null)));
        this.props.history.push('/');
    }

    render() {
        return (
            <VerifyAccountForm onSubmit={this.onSubmit} history={this.props.history}/>
        );
    }
}
const mapStateToProps = state => {
    return {

    };
}

export default connect(mapStateToProps)(withRouter(VerifyAccount));