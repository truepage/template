import React, { Component } from 'react'

export default class DocStudio extends Component {
    render() {
        return (
            <div id="DocStudio">
                <div className="row">
                    <div className="row flex-center w-100">
                        <h3>Doc Studio</h3>
                    </div>

                    <div className="row w-100">
                        <div className="col-3 col align-top border studio-box">
                            <div id="toolbox" className="col">
                                <div id="doctools" className="col padding-5">
                                    <div className="row">
                                        <h4 id="toolbox-title">Doc Tools</h4>
                                    </div>
                                    <div className="col">
                                        <ul id="tools-list">
                                            <li className="tools-item"><button className="padding-5 bg-ef">Add Page</button></li>
                                            <li className="tools-item"><button className="padding-5 bg-ef">Add Page</button></li>
                                        </ul>
                                    </div>
                                </div>

                                <div id="pagetools" className="col padding-5">
                                    <div className="row">
                                        <h4 id="toolbox-title">Page Tools</h4>
                                    </div>
                                    <div className="col">
                                        <ul id="tools-list">
                                            <li className="tools-item"><button className="padding-5 bg-ef">Add Page</button></li>
                                            <li className="tools-item"><button className="padding-5 bg-ef">Add Page</button></li>
                                        </ul>
                                    </div>
                                </div>

                                <div id="sectools" className="col padding-5">
                                    <div className="row">
                                        <h4 id="toolbox-title">Widgets</h4>
                                    </div>
                                    <div className="col">
                                        <ul id="tools-list">
                                            <li className="tools-item"><button className="padding-5 bg-ef">Add Page</button></li>
                                            <li className="tools-item"><button className="padding-5 bg-ef">Add Page</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="document" className="col-6 col align-top border studio-box">
                            <div className="col">
                                <div className="row flex-center">
                                    <h4 id="doc-title">Untitled Document - 1</h4>
                                </div>
                                <div className="row flex-center">
                                    <p id="doc-description">This is an untitled Document.</p>
                                </div>
                            </div>

                            <div id="page-box" className="col">
                                <div className="border padding-5 doc-page">
                                    <div className="col padding-5">
                                        <div className="row badge primary">
                                            <h4 id="page-title">Untitled Page</h4>
                                        </div>
                                        <div className="row">
                                            <p id="page-description">This is an untitled page.</p>
                                        </div>
                                    </div>

                                    <div id="section-box">
                                        <div className="padding-5 page-section">
                                            <div className="col padding-5">
                                                <div className="row badge success">
                                                    <h4 id="section-title">Untitled Section</h4>
                                                </div>
                                                <div className="row">
                                                    <p id="section-description">This is an untitled section.</p>
                                                </div>
                                            </div>

                                            <div id="widget-box">
                                                <div className="padding-5 widget-textview">
                                                    <p id="widget-text">This is just a textview.
                                                        sdkhdskgdsljlkjdhidurbfshdfjckfsjh fkjhdfaslkjfhslkjf
                                                        asjkdfashlfkjhsauifnsak
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="border padding-5 doc-page">
                                    <div className="col padding-5">
                                        <div className="row badge primary">
                                            <h4 id="page-title">Untitled Page</h4>
                                        </div>
                                        <div className="row">
                                            <p id="page-description">This is an untitled page.</p>
                                        </div>
                                    </div>

                                    <div id="section-box">
                                        <div className="padding-5 page-section">
                                            <div className="col padding-5">
                                                <div className="row badge success">
                                                    <h4 id="section-title">Untitled Section</h4>
                                                </div>
                                                <div className="row">
                                                    <p id="section-description">This is an untitled section.</p>
                                                </div>
                                            </div>

                                            <div id="widget-box">
                                                <div className="padding-5 widget-textview">
                                                    <p id="widget-text">This is just a textview.
                                                        sdkhdskgdsljlkjdhidurbfshdfjckfsjh fkjhdfaslkjfhslkjf
                                                        asjkdfashlfkjhsauifnsak
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 col bg-ef align-top border studio-box">
                            <div className="row border padding-5">
                                <h4>Properties</h4>
                            </div>
                            <div className="col">
                                <div className="col padding-5">
                                    <label className="col align-middle padding-10">Document Name: </label>
                                    <input type="text" placeholder="Document Name" className="bg-ff"/>
                                </div>
                                <div className="col padding-5">
                                    <label className="col align-middle padding-10">Document Description: </label>
                                    <input type="text" placeholder="Document Description" className="bg-ff"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
