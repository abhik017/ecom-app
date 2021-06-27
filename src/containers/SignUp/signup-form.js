import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import logo from '../../styles/img/e-com.png';
import { Card } from '../../components/index';
import { renderInputField } from '../../utils/redux-form-components/index';
import _ from 'lodash';

const SignupForm = props => {
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
                    name="fullName"
                    component={renderInputField}
                    type="text"
                    label="Full Name"
                />
                <br/>
                <Field
                    name="email"
                    component={renderInputField}
                    type="text"
                    label="Email"
                />
                <br/>
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
                <label style={{width: "100%"}}>Role</label>
                <Field 
                    name="role"
                    component="select"
                    className="role-field"
                    style={{width: "100%"}}
                >
                    <option value="customer">Customer</option>
                    <option value="vendor">Vendor</option>
                </Field>
                <br/><br/>
                <div>
                <div className="action-buttons-wrapper flex-center">
                    <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-primary"
                    >
                    Sign Up
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
        fullName, email, password, confirmPassword, role
    } = values;
    if (!email) {
        errors.email = 'Required';
      } else if (
        email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
      ) {
        errors.email = 'Invalid email address';
    }
    if(!fullName) {
        errors.fullName = 'Required';
    }
    if(!password) {
        errors.password = 'Required!';
    }
    if(!confirmPassword) {
        errors.confirmPassword = 'Required!';
    }
    if(!role) {
        errors.role = 'Required!';
    }
    if(!_.isEmpty(password) && !_.isEmpty(confirmPassword)) {
        if(!_.isEqual(password, confirmPassword)) {
            errors.confirmPassword = 'Passwords do not match!';
        } else if(password.length < 8) {
            errors.password = 'Password must have minimum length of 8 characters';
            errors.confirmPassword = 'Password must have minimum length of 8 characters';
        }
    };
    return errors;
}

const formComponent = reduxForm({
    form: 'signup',
    validate,
    enableReinitialize: true,
})(SignupForm);

function mapStateToProps(state, dispatch) {
    return {
        formData: state.form.signup ? state.form.signup.values : {}
    }
}

export default connect(mapStateToProps)(formComponent);