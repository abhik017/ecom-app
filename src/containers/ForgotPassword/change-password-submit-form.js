import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import logo from '../../styles/img/e-com.png';
import { Card } from '../../components/index';
import { renderInputField } from '../../utils/redux-form-components/index';
import {  } from '../../reducers/forgot-password.reducer';
import _ from 'lodash';
const ForgotPasswordForm = props => {

    const { handleSubmit, submitting } = props;
    const onSubmitClick = data => {
        handleSubmit(data);
    }

    return (
    <div className="container">
        <div className="logo-container">
            <img className="logo" src={logo} alt="e-com"/>
            <p className="text">ECOM.COM</p>
        </div>
    
        <div className="form">
            <Card className="panel">
                <form onSubmit={onSubmitClick}>
                    <Field
                        name="password"
                        component={renderInputField}
                        type="password"
                        label="Password"
                        enableShowHidePassword={true}
                    />
                    <Field
                        name="confirmPassword"
                        component={renderInputField}
                        type="password"
                        label="Confirm Password"
                        enableShowHidePassword={true}
                    />
                    <div>
                        <div className="action-buttons-wrapper flex-center">
                            <button
                            type="submit"
                            disabled={submitting}
                            className="btn btn-primary"
                            >
                            Change Password
                            </button>
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    </div>
    )
}

const validate = values => {
    const errors = {};
    const {
        password,
        confirmPassword
    } = values;
    if(!password) {
        errors.password = 'Required!';
    }
    if(!confirmPassword) {
        errors.confirmPassword = 'Required!';
    }
    if(!_.isEmpty(password) && !_.isEmpty(confirmPassword)) {
        if(!_.isEqual(password, confirmPassword)) {
            errors.confirmPassword = 'Passwords do not match!';
        } else if(password.length < 8) {
            errors.password = 'Password must have minimum length of 8 characters';
            errors.confirmPassword = 'Password must have minimum length of 8 characters';
        }
    }
    return errors;
}

const formComponent = reduxForm({
    form: 'forgotPassword',
    validate,
    enableReinitialize: true,
})(ForgotPasswordForm);



function mapStateToProps(state, dispatch) {
    return {
        formData: state.form.forgotPassword ? state.form.forgotPassword.values : {},
    }
}

export default connect(mapStateToProps)(formComponent);