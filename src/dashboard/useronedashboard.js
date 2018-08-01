import axios from "axios/index";
import React, {Component} from "react";
import { cognitoidentityserviceprovider } from "../aws_profile";
import NavBar from "../navbar/useronenavbar";
//import {COMPANY_API_URL, API_URL, FACE_UPLOAD_URL} from "../../../config";
import '../css/style.css';
import '../HomeTemplate/vendor/bootstrap/css/bootstrap.min.css';
import '../HomeTemplate/vendor/font-awesome/css/font-awesome.min.css';
import '../HomeTemplate/css/grayscale.min.css';
import '../css/custombootstrap.css';
import { Redirect, withRouter} from 'react-router-dom'

let COMPANY_API_URL=''

class UserOneDashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            register:false
        };
        this.register=this.register.bind(this)
    }
    register(){
        this.setState({
            register:true
        });
    }
    render() {
        let register = this.register.bind();
        if(this.state.register){

            return(
                <Redirect to='/register/user2'/>
            );

        }
        else {
            return (
                <div>
                    <NavBar/>
                    <header className="masthead">
                        <div className="intro-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 mx-auto">
                                        <div className="main-page-header">
                                            <h3 className="brand-heading">Welcome to user 1 Dashboard</h3>
                                            <li className="list-inline-item">
                                                <button
                                                    onClick={register}
                                                    className="btn btn-default btn-lg"
                                                >
                                                    <i className="fa fa-level-up fa-fw"/>
                                                    <span className="network-name">Register User 2</span>
                                                </button>
                                            </li>
                                        </div>
                                        <i className="fa fa-angle-double-down animated"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            );
        }
    }

}
export default withRouter(UserOneDashboard);