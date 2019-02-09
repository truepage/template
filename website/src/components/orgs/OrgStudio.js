import React, { Component } from 'react'

export default class OrgStudio extends Component {
    render() {
        return (
            <div id="OrgStudio">
                <div>
                    <h3>Org Studio</h3>
                </div>
                <div>
                    <div className="studio-left">
                        <div className="x-nav">
                            <button>Explorer</button>
                            <button>Tools</button>
                        </div>
                        <div className="studio-explorer"></div>
                        <div className="studio-tools"></div>
                    </div>
                    <div className="studio-main">

                    </div>
                    <div className="studio-right"></div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}
