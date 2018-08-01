import axios from "axios/index";
import React, {Component} from "react";
import { cognitoidentityserviceprovider } from "../aws_profile";
import NavBar from "../navbar/useronenavbar";
//import {withRouter} from "react-router-dom";
//import {COMPANY_API_URL, API_URL, FACE_UPLOAD_URL} from "../../../config";
import '../css/style.css';
import '../HomeTemplate/vendor/bootstrap/css/bootstrap.min.css';
import '../HomeTemplate/vendor/font-awesome/css/font-awesome.min.css';
import '../HomeTemplate/css/grayscale.min.css';
import '../css/custombootstrap.css';

let COMPANY_API_URL='';

class RegisterUserTwo extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            email:'',
            info:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }
    signUpEmployee({fullname, username, email}){
        const p = new Promise((res, rej)=> {
            setTimeout(() => {
                var params = {
                    UserPoolId: this.state.id,
                    Username: username,
                    DesiredDeliveryMediums: [
                        "EMAIL"
                    ],
                    UserAttributes: [
                        {
                            Name: 'email',
                            Value: email
                        },
                        {
                            Name: 'name',
                            Value: fullname,
                        }

                    ]
                };
                console.log("creating");
                cognitoidentityserviceprovider.adminCreateUser(params, function (err, data) {
                    if (err){
                        console.log(err);
                        rej(err);
                    }
                    else{
                        console.log("Got it");
                        console.log(data);
                        res(data);
                    }
                });
            }, 3000);
        });
        return p
    }
    handleSubmit(event) {
        event.preventDefault();
        if(this.state.username===''||this.state.imgSrc.length===0){
            this.setState({
                info: "Fill all fields properly"
            });
        }
        else {
            this.setState({
                info:'Please Wait',
                forLoader:[<div className="loader"></div>]
            });
            axios.get(COMPANY_API_URL, {
                headers:{
                    token: localStorage.getItem('companyIdToken')
                },
                params : {
                    param1: "RegisterEmployee",
                    param2: this.state.fullname,
                    param3: this.state.username+" "+this.state.position+" "+this.state.department,
                    param4: this.state.email,
                    param5: localStorage.getItem("adminname")
                }
            })
                .then(response => {
                    if(response.data==="Successfully Registered."){

                    }
                    else{
                        //console.log(response.data)
                        this.setState({
                            info:response.data
                        })
                    }
                })
                .catch(error => {

                });
        }
    }
    render() {
        return(
            <div>
                <NavBar/>
                <header className="masthead">
                    <div className="intro-body">
                        <div className="container">
                            <div className="row" style={{marginTop:60, paddingBottom:40}}>
                                <div className="col-md-12" style={{padding:25}}>
                                    <h3>Register User 2</h3>
                                    <form onSubmit={this.handleSubmit} className="form-custom">

                                        <input
                                            name="username"
                                            type="text"
                                            placeholder="Employee username"
                                            value={this.state.username}
                                            onChange={(event) => this.handleChange(event)}/><br/>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={(event) => this.handleChange(event)}/><br/>



                                        <li className="list-inline-item" style={{margin: 10, padding: 10, paddingLeft: 20, borderRadius: 10, width: 350}}>
                                            <button
                                                type="submit"

                                                className="btn btn-default btn-lg"
                                            >
                                                <i className="fa fa-level-up fa-fw" />
                                                <span className="network-name">Register User 2</span>
                                            </button>
                                        </li><br/>
                                        <li className="list-inline-item" style={{margin: 10, padding: 10, paddingLeft: 20, borderRadius: 10, width: 350}}>
                                            <a href="#dashboard/user1"
                                                    className="btn btn-default btn-lg"
                                            >
                                                <i className="fa fa-crosshairs" />
                                                <span className="network-name"> Cancel </span>
                                            </a>
                                        </li><br/>
                                    </form>
                                    <h1 className="message">{this.state.info}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

        );
    }
}
export default RegisterUserTwo;