import React, {Component} from "react";
import '../HomeTemplate/vendor/bootstrap/css/bootstrap.min.css';
import '../HomeTemplate/vendor/font-awesome/css/font-awesome.min.css';
import '../HomeTemplate/css/grayscale.min.css';
import { Redirect, withRouter} from 'react-router-dom'

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state= {
            logout: false
        };
        this.logout=this.logout.bind(this);
    }
    logout(){
        localStorage.clear()
        this.setState({
            logout:true
        });

    }
    render() {

        let boundCLick = this.logout.bind();
        if(this.state.logout){

            return(
                <Redirect to='/'/>
            );

        }
        else {

            return (

                <div className="nav">
                    <nav
                        className="navbar navbar-expand-lg navbar-light fixed-top"
                        id="mainNav"
                    >
                        <div className="container">
                            <a className="navbar-brand js-scroll-trigger" href="http://phuyal.co.uk/">
                                Welcome {localStorage.getItem('adminname')}
                            </a>
                            <button
                                className="navbar-toggler navbar-toggler-right"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarResponsive"
                                aria-controls="navbarResponsive"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                Menu
                                <i className="fa fa-bars"/>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">

                                    <li className="nav-item">
                                        <a className="nav-link js-scroll-trigger" onClick={boundCLick}>
                                            Logout
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>

            );
        }
    }
}
export default withRouter(NavBar);