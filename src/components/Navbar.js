import React, {Component} from 'react';

import logo from "../images/logo.svg"
import "./styles/Navbar.css"

class Navbar extends Component {
    render() {
        return (
            <div className={"Navbar"}>
                <a className={"Navbar__brand"} href="/">
                    <div className={"container-fluid"}>
                        <img className={"Navbar__brand-logo"} src={logo} alt=""/>
                        <span className={"font-weight-light"}>Platzi</span>
                        <span className={"font-weight-bold"}>Conf</span>
                    </div>
                </a>
            </div>
        );
    }
}

export default Navbar;