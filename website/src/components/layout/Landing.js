import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Landing extends Component {
    render() {
        return (
            <div id="Landing">
                <div>
                    <h1>Welcome to Truepage.</h1>
                    <Link to="/login"><button>Login</button></Link>
                    <Link to="/register"><button>Register</button></Link>
                </div>
            </div>
        )
    }
}
