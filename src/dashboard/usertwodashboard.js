import React, {Component} from "react";

class UserTwoDashboard extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div>
                <header className="masthead">
                        <div className="intro-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 mx-auto">
                                        <div className="main-page-header">
                                            <h3 className="brand-heading">Welcome to user 2 Dashboard</h3>
                                            <h3>Choose a frame</h3>

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