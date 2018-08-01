import React, {Component} from "react";
import '../HomeTemplate/vendor/bootstrap/css/bootstrap.min.css';
import '../HomeTemplate/vendor/font-awesome/css/font-awesome.min.css';
import '../HomeTemplate/css/grayscale.min.css';

class NavBar extends Component {
    render() {
        return (

            <div className="nav">
                <nav
                    className="navbar navbar-expand-lg navbar-light fixed-top"
                    id="mainNav"
                >
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="http://phuyal.co.uk/">
                            Phuyal Limited
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
                            <i className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#login/user1">
                                        Login
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#register">
                                        Register
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
export default NavBar;