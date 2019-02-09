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
                        <div className="col-3 col bgcolor-ef align-top">
                            <div className="tabs">

                                <input id="tab1" type="radio" name="tabs" checked/>
                                <label htmlFor="tab1">Tools</label>

                                <input id="tab2" type="radio" name="tabs"/>
                                <label htmlFor="tab2">Explorer</label>

                                <div className="content" id="content1">
                                    <p>This is tools.</p>
                                </div>

                                <div className="content" id="content2">
                                    <p>This is explorer.</p>
                                </div>
                                
                            </div>
                        </div>

                        <div className="col-6 col">
                            <div className="row">
                                <p>Org Name://first-org/</p>



                                <p>sdklfjaslfjasf
                                asfkasfjasl;fj;asfkasfjasls
                                kjsadfhas;fkas;fkas
                                ksdfasklfjaskfhaskljfgaslfhas
                                jsdfhaslkjfhaslkfjhaslkfhasf
                                fdasjakhfkasjyfiwef.smcncnsakhdfas8fas
                                jdkfhiuhfaskjfhslkfjhasfsdfjkls
                                sdfhgsljfl
                                </p>
                                
                            </div>
                        </div>

                        <div className="col-3 col bgcolor-ef align-top">
                            <button>Props</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
