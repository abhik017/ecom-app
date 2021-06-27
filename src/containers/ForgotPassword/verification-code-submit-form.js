import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import logo from '../../styles/img/e-com.png';
import { Card } from '../../components/index';
import { renderInputField } from '../../utils/redux-form-components/index';
import { changeForgotPasswordOtpStatus } from '../../actions/forgot-password.action';
import { Row, Col } from 'react-bootstrap';
const ForgotPasswordForm = props => {

    const { handleSubmit, submitting } = props;
    const onSubmitClick = data => {
        handleSubmit(data);
    }

    const handleResendOtp = () => {
        props.dispatch(changeForgotPasswordOtpStatus());
        props.history.push('/forgot-password/');
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
                        name="email"
                        component={renderInputField}
                        type="text"
                        label="Email"
                    />
                    <br/>
                    <Field
                        name="verificationCode"
                        component={renderInputField}
                        type="text"
                        label="Code"
                    />
                    <br/>
                    <div>
                        <div className="action-buttons-wrapper flex-center">
                            <button
                            type="submit"
                            disabled={submitting}
                            className="btn btn-primary"
                            >
                            Verify OTP
                            </button>
                        </div>
                    </div>
                </form>
                <Row>
                <Col
                    color="primary" 
                    className="flex-center mt-2"
                    style={{cursor: "pointer", color: "blue"}}
                    onClick={handleResendOtp}>
                    <u>
                        Resned Verification Code
                    </u>
                </Col>
                </Row>
            </Card>
        </div>
    </div>
    )
}

const validate = values => {
    const errors = {};
    const {
        email, verificationCode
    } = values;
    if (!email) {
        errors.email = 'Required!';
      } else if (
        email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
      ) {
        errors.email = 'Invalid email address!';
    }
    if(!verificationCode) {
        errors.verificationCode = 'Required!';
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