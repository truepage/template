import React, { Component } from 'react'

export default class OrgStudio extends Component {
    render() {
        return (
            <div id="OrgStudio">
                <div className="col">
                    <div className="row flex-center">
                        <h3>Org Studio</h3>
                    </div>
                    <div className="row">
                        <div className="col-3 col align-top border studio-box">
                            <div className="tabs">

                                <input id="tab1" type="radio" name="tabs" checked/>
                                <label htmlFor="tab1">Tools</label>

                                <input id="tab2" type="radio" name="tabs"/>
                                <label htmlFor="tab2">Explorer</label>

                                <div className="content" id="content1">
                                    <div id="toolbox" className="col">
                                        <div id="doctools" className="col padding-5">
                                            <div className="row">
                                                <h5 id="toolbox-title">Doc Tools</h5>
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

                                <div className="content" id="content2">
                                    <ul>
                                        <li>First Org</li>
                                        <ul>
                                            <li>Node-1</li>
                                        </ul>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>

                        <div className="col-6 col align-top border studio-box">
                            <div className="row">
                                <div className="col align-middle border padding-10 w-100">
                                    <p>First Organization://first-org/</p>
                                </div>

                                <div className="col border w-100">
                                    <div className="row">
                                        <label className="col align-middle padding-10">Organization Name: </label>
                                        <p className="col align-middle padding-10">First Orgnization</p>
                                    </div>
                                    <div className="row">
                                        <label className="col align-middle padding-10">Tagline: </label>
                                        <p className="col align-middle padding-10">The very first organization.</p>
                                    </div>
                                    <div className="row">
                                        <label className="col align-middle padding-10">Username: </label>
                                        <p className="col align-middle padding-10">first_org</p>
                                    </div>
                                    <div className="row">
                                        <label className="col align-middle padding-10">Website: </label>
                                        <p className="col align-middle padding-10">www.first.org</p>
                                    </div>
                                </div>

                                <div className="col border w-100 padding-5">
                                    <div className="row flex-center">
                                        <h4>Nodes</h4>
                                    </div>
                                    <div className="col">
                                        <button>Node-1</button>
                                        <button>Node-2</button>
                                    </div>
                                </div>

                                <div className="col border w-100 padding-5">
                                    <div className="row flex-center">
                                        <h4>Members</h4>
                                    </div>
                                    <div className="col">
                                        <button>Member-1</button>
                                        <button>Member-2</button>
                                    </div>
                                </div>

                                <div className="col border w-100 padding-5">
                                    <div className="row flex-center">
                                        <h4>Documents</h4>
                                    </div>
                                    <div className="col">
                                        <button>Doc-1</button>
                                        <button>Doc-2</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 col align-top border studio-box bg-ef">
                            <div className="row border padding-5">
                                <h4>Properties</h4>
                            </div>
                            <div className="col">
                                <div className="col padding-5">
                                    <label className="col align-middle padding-10">Organization Name: </label>
                                    <input type="text" placeholder="Organization Name" className="bg-ff"/>
                                </div>
                                <div className="col padding-5">
                                    <label className="col align-middle padding-10">Tagline: </label>
                                    <input type="text" placeholder="Tagline" className="bg-ff"/>
                                </div>
                                <div className="col padding-5">
                                    <label className="col align-middle padding-10">Username: </label>
                                    <input type="text" placeholder="Username" className="bg-ff"/>
                                </div>
                                <div className="col padding-5">
                                    <label className="col align-middle padding-10">Website: </label>
                                    <input type="text" placeholder="Website" className="bg-ff"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
