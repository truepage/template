import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Landing extends Component {
    render() {
        return (
            <div id="Landing">
                <div className="col">
                    <div className="row flex-center">
                        <h3>Welcome to Truepage.</h3>
                    </div>
                    <div className="row flex-center">
                        <Link to="/login"><button>Login</button></Link>
                        <Link to="/register"><button>Register</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
