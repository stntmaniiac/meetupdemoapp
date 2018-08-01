import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './index.css';
import RegisterUserOne from './login/register'
import registerServiceWorker from './registerServiceWorker';
import Home from "./home";
import LoginUserOne from "./login/loginuserone";
import LoginUserTwo from "./login/loginusertwo"
import UserOneDashboard from "./dashboard/useronedashboard";
import RegisterUserTwo from './login/registerusertwo'

const PrivateRoute1 = ({component: Component, ...rest}) => (
    <Route {...rest} render = {(props) => (
        localStorage.getItem('admin') === "true"
            ? <Component {...props}/>
            : <Redirect to='/login/user1'/>
    )}/>
)
const PrivateRoute2 = ({component: Component, ...rest}) => (
    <Route {...rest} render = {(props) => (
        localStorage.getItem('employee') === "true"
            ? <Component {...props}/>
            : <Redirect to='/login/user2'/>
    )}/>
)
ReactDOM.render(
    <div>
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/register' component={RegisterUserOne}/>
                <Route exact path='/login/user1' component={LoginUserOne}/>
                <Route exact path='/login/user2' component={LoginUserTwo}/>


                <Route exact path='/dashboard/user1' component={UserOneDashboard}/>
                <Route exact path='/register/user2' component={RegisterUserTwo}/>
            </Switch>
        </div>
    </Router>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
