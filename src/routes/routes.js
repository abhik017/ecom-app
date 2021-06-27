import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    withRouter
} from 'react-router-dom';
import Login from '../containers/Login/login.index';
import ForgotPassword from '../containers/ForgotPassword/forgot-password.index';
import Signup from '../containers/SignUp/signup.index';
import ResendOTP from '../containers/SignUp/resend-verification-code.index';

class RouteClass extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={Login}/>
                    <Route path='/login/' exact component={Login}/>
                    <Route path='/forgot-password/' exact component={ForgotPassword}/>
                    <Route path='/signup' exact component={Signup}/>
                    <Route path='/verify-account' exact component={ResendOTP}/>
                </Switch>
            </Router>
        );
    }
}

export default RouteClass;