import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Postbox extends Component {
    render() {
        return (
            <div id="Postbox">
                <div className="row flex-center">
                    <div className="col col-6 border padding-5">
                        <div className="row">
                            <Link to="/postbox"><button>Compose</button></Link>
                            <Link to="/postbox/inbox"><button>Inbox</button></Link>
                            <Link to="/postbox/outbox"><button>Outbox</button></Link>
                            <Link to="/postbox/drafts"><button>Drafts</button></Link>
                        </div>
                        <div className="col border padding-10">
                            <div className="row">
                                <label>To: </label>
                                <input type="text" placeholder="To"/>
                            </div>
                            <div className="row">
                                <label>Subject: </label>
                                <input type="text" placeholder="Subject"/>
                            </div>
                            <div className="row">
                                <label>Message: </label>
                                <input type="text" placeholder="Message"/>
                            </div>
                            <div className="row">
                                <label>Attachments: </label>
                                <button className="row padding-10">Doc-1 <p className="padding-0 border">X</p></button>
                                <button className="row padding-10">Doc-2 <p className="padding-0 border">X</p></button>
                                <button className="row padding-10">+</button>
                            </div>
                            <div className="row">
                                <button type="submit">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
