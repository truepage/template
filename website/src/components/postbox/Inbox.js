import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Inbox extends Component {
    render() {
        return (
            <div id="Inbox">
                <div className="row flex-center">
                    <div className="col col-6 border padding-5">
                        <div className="row">
                            <Link to="/postbox"><button>Compose</button></Link>
                            <Link to="/postbox/inbox"><button>Inbox</button></Link>
                            <Link to="/postbox/outbox"><button>Outbox</button></Link>
                            <Link to="/postbox/drafts"><button>Drafts</button></Link>
                        </div>

                        <div className="col border padding-10">
                            <div className="col">
                                <div className="row">
                                    <h4>From: sender</h4>
                                </div>
                                <div className="row">
                                    <p>The subject of the post.</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <h4>From: sender</h4>
                                </div>
                                <div className="row">
                                    <p>The subject of the post.</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <h4>From: sender</h4>
                                </div>
                                <div className="row">
                                    <p>The subject of the post.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
