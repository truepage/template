import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Dashboard extends Component {
    render() {
        return (
            <div id="Dashboard">
                <div className="col">
                    <div className="row flex-center">
                        <div className="col col-6 border padding-5">
                            <div className="row padding-10">
                                <h4>Documents</h4>
                            </div>
                            <div className="row">
                                <Link to="/docs/view/1"><button>Doc-1</button></Link>
                                <button>Doc-2</button>
                                <button>Doc-3</button>
                            </div>
                            <div className="row">
                                <Link to="/doc-studio"><button>Create New</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row flex-center">
                        <div className="col col-6 border padding-5">
                            <div className="row padding-10">
                                <h4>Organizations</h4>
                            </div>
                            <div className="row">
                                <button>Org-1</button>
                                <button>Org-2</button>
                                <button>Org-3</button>
                            </div>
                            <div className="row">
                            <Link to="/org-studio"><button>Create New</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
