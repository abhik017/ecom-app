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
import CustomerHomePage from '../containers/CustomerHomePage/homepage.index';

class RouteClass extends React.Component {
    
    render() {
        const jwtExpiryTimeString = localStorage.getItem('jwtExpiryTime');
        const jwtExpiryTimeNum = parseInt(jwtExpiryTimeString);
        const loginResponse = JSON.parse(localStorage.getItem('loginResponse'));
        // localStorage.removeItem('loginResponse');
        if( !loginResponse || !jwtExpiryTimeNum || Date.now() > jwtExpiryTimeNum) {
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
        } else {
            const userRole = loginResponse.role;
            if(userRole === 'customer') {
                return (
                    <Router>
                        <Switch>
                            <Route path='/' exact component={CustomerHomePage}/>
                            <Route path='/add-balance'exact component={null}/>
                            <Route path='/withdraw-balance'exact component={null}/>
                            <Route path='/watchlist'exact component={null}/>
                        </Switch>
                    </Router>
                )
            } else if(userRole === 'vendor') {
                return (
                    <Router>
                        <Switch>
                            <Route path='/' exact component={null}/>
                        </Switch>
                    </Router>
                )
            }
            return (<h1>UNAUTHORIZED</h1>);
        }
    }
}


export default (RouteClass);