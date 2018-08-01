import React, {Component} from "react";
import NavBar from './navbar/navbar';
import logo from './logo.png'
class Home extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <header className="masthead">
                    <div className="intro-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <div className="main-page-header">
                                        <img src={logo} alt="logo" style={{height:106, width:300}}/>
                                        <h3 className="brand-heading">Demo Serverless app</h3>
                                        <p className="intro-text">

                                        </p>
                                    </div>
                                    <i className="fa fa-angle-double-down animated" />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
export default Home;