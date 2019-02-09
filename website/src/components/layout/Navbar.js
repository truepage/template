import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div id="Navbar">
                <nav>
                    <div className="site-name">
                        <h3>Truepage</h3>
                    </div>
                    <div className="site-menu">
                        <ul>
                            <li>Dashboard</li>
                            <li>Postbox</li>
                            <li>Notifications</li>
                            <li>Account</li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
