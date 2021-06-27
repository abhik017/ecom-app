import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import logo from '../../styles/img/e-com.png';
import { Card } from '../../components/index';
import { renderInputField } from '../../utils/redux-form-components/index';
import { Col, Row } from 'react-bootstrap';
const LoginForm = props => {
    const { handleSubmit, submitting } = props;

    const onSubmitClick = data => {
        handleSubmit(data);
        props.reset();
    }

    const handleForgotPassword = data => {
        props.history.push('/forgot-password');
    }

    const handleSignUp = data => {
        props.history.push('/signup');
    }

    const handleVerifyAccount = data => {
        props.history.push('/verify-account');
    }

    return (
    <div className="login-container">
        <div className="logo-container">
            <img className="logo" src={logo} alt="e-com"/>
            <p className="text">ECOM.COM</p>
        </div>
        <div className="form">
            <Card className="login-panel">
            
            <form onSubmit={onSubmitClick}>
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
                    // icon={faLock}
                    type="password"
                    label="Password"
                    enableShowHidePassword={true}
                />
                <div>
                <div className="action-buttons-wrapper flex-center">
                    <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-primary"
                    >
                    Log In
                    </button>
                </div>
                </div>
            </form>
            <Row>
            <Col 
                lg={3} sm={12} xs={12} md={3}
                color="primary" 
                className="flex-center mt-2"
                style={{cursor: "pointer", color: "blue", marginLeft: "0"}}
                onClick={handleSignUp}>
                <u>
                    Sign Up!
                </u>
            </Col>
            <Col
                lg={6} sm={12} xs={12} md={6}
                color="primary" 
                className="flex-center mt-2"
                style={{cursor: "pointer", color: "blue"}}
                onClick={handleForgotPassword}>
                <u>
                    Forgot password?
                </u>
            </Col>
            <Col
                lg={3} sm={12} xs={12} md={3}
                color="primary" 
                className="flex-center mt-2"
                style={{cursor: "pointer", color: "blue"}}
                onClick={handleVerifyAccount}>
                <u>
                    Verify!
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
        email
    } = values;
    if (!email) {
        errors.email = 'Required!';
      } else if (
        email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
      ) {
        errors.email = 'Invalid email address!';
    }
    return errors;
}

const formComponent = reduxForm({
    form: 'login',
    validate,
    enableReinitialize: true,
})(LoginForm);

function mapStateToProps(state, dispatch) {
    return {
        formData: state.form.login ? state.form.login.values : {}
    }
}

export default connect(mapStateToProps)(formComponent);