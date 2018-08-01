import React, {Component} from "react";
import NavBar from '../navbar/navbar'
import '../css/style.css'
import '../HomeTemplate/vendor/bootstrap/css/bootstrap.min.css';
import '../HomeTemplate/vendor/font-awesome/css/font-awesome.min.css';
import '../HomeTemplate/css/grayscale.min.css';
import '../css/custombootstrap.css';
class RegisterUserOne extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            username:'',
            password:'',
            repassword:'',
            info:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validatePassword(str){
        var msg = [];
        var lowerCaseLetters = /[a-z]/g;
        if(str.match(lowerCaseLetters)) {
            msg[0]=true;
        } else {
            msg[0]=false;
        }

        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if(str.match(upperCaseLetters)) {
            msg[1]=true;
        } else {
            msg[1]=false;
        }

        // Validate numbers
        var numbers = /[0-9]/g;
        if(str.match(numbers)) {
            msg[2]=true;
        } else {
            msg[2]=false;
        }

        // Validate length
        if(str.length >= 8) {
            msg[3]=true;
        } else {
            msg[3]=false;
        }
        return msg;
    }
    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }
    handleSubmit(event) {
        event.preventDefault();
        var passwordValidationMessage=this.validatePassword(this.state.password);
        if(this.state.username===''||this.state.email===''||this.state.password===''||this.state.repassword===''){
            this.setState({
                info: "Fill the Form Correctly"
            });
            setTimeout(() => {
                this.setState({
                    info: ''
                });
            }, 5000);
        }
        else if(!passwordValidationMessage[0] || !passwordValidationMessage[1] || !passwordValidationMessage[2] || !passwordValidationMessage[3]){
            this.setState({
                info:"Password should be at least 8 characters, must contain a lowercase, a uppercase and a number"
            });
            setTimeout(() => {
                this.setState({
                    info: ''
                });
            }, 5000);
        }
        else if(this.state.password!==this.state.repassword){
            this.setState({
                info: "Password didnot match"
            });
            setTimeout(() => {
                this.setState({
                    info: ''
                });
            }, 5000);
        }
        else {
            this.setState({
                info: "Registering..Please Wait"
            });
            this.signUpUser(this.state)
                .then(({email})=>{

                    console.log("done signing up")
                    this.setState({
                        info: "Successfully registered...Verify your email and Login"
                    });
                    setTimeout(() => {
                        this.props.history.push('/login/company');
                    }, 5000);

                })
                .catch((err)=>{
                    // if failure, display the error message and toggle the loading icon to disappear
                    console.log(err);
                    if(err['code']==="InvalidLambdaResponseException"){
                        this.setState({
                            info: "Email Already Used"
                        });
                    }
                    else{
                        this.setState({
                            info: err['message']
                        })
                    }
                })
        }

    }
    render() {
        return (
            <div>
                <NavBar/>
                <header className="masthead">
                    <div className="intro-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-auto" style={{marginTop: 150}}>
                                    <h3>Register</h3>
                                    <form onSubmit={this.handleSubmit} className="form-custom">
                                        <input
                                            type="text"
                                            name="username"
                                            value={this.state.username}
                                            onChange={(event) => this.handleChange(event)}
                                            placeholder="Username"
                                            required="required"/><br/>
                                        <input
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={(event) => this.handleChange(event)}
                                            placeholder="Email"
                                            required="required"/><br/>
                                        <input
                                            type="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={(event) => this.handleChange(event)}
                                            placeholder="Password"
                                            required="required"/><br/>
                                        <input
                                            type="password"
                                            name="repassword"
                                            value={this.state.repassword}
                                            onChange={(event) => this.handleChange(event)}
                                            placeholder="Confirm Password"
                                            required="required"/><br/>
                                        <li className="list-inline-item" >
                                            <button
                                                type="submit"
                                                className="btn btn-default btn-lg"
                                            >
                                                <i className="fa fa-level-up fa-fw" />
                                                <span className="network-name">Register</span>
                                            </button>
                                        </li>
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
export default RegisterUserOne;