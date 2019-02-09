import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div id="Navbar">
                <nav className="border row flex-middle">
                    <div className="nav-brand">
                        <h3>Truepage</h3>
                    </div>
                    <div className="collapsible">
                        <div className="collapsible-body">
                            <ul className="inline">
                                <li>Dashboard</li>
                                <li>Postbox</li>
                                <li>Notifications</li>
                                <li>Account</li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
