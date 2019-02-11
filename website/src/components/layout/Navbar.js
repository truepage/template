import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div id="Navbar">
                <nav className="border row flex-middle flex-center">
                    <div className="nav-brand">
                        <h3>Truepage</h3>
                    </div>
                    <div className="collapsible">
                        <div className="collapsible-body">
                            <ul className="inline">
                                <Link to="/dashboard"><li>Dashboard</li></Link>
                                <Link to="/postbox"><li>Postbox</li></Link>
                                <Link to="/notifications"><li>Notifications</li></Link>
                                <Link to="/account"><li>Account</li></Link>
                                <Link to="/logout"><li>Logout</li></Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
