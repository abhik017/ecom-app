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
import { connect } from 'react-redux';
import { isJwtExpired } from './../actions/login.action';
import { jwtExpiryStatus } from '../reducers/login.reducer';

class RouteClass extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(isJwtExpired());
    }
    render() {
        // localStorage.removeItem('loginResponse');
        // console.log(this.props.isJwtExpired);
        if( this.props.isJwtExpired ) {
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
            const loginResponse = JSON.parse(localStorage.getItem('loginResponse'));
            const userRole = loginResponse && loginResponse.role;
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

const mapStateToProps = state => {
    return {
        isJwtExpired: jwtExpiryStatus(state)
    };
}

export default connect(mapStateToProps)(RouteClass);