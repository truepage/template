import React, { Component } from 'react';

export default class Notifications extends Component {
    render() {
        return (
            <div id="Notifications">
                <div className="row flex-center">
                    <div className="col col-6 border padding-5">
                        <div className="col border">
                            <div className="row w-100">
                                <div className="row flex-left">sender</div>
                                <div className="row flex-right">00:00:00</div>
                            </div>
                            <div className="row">
                                This is the notification.
                            </div>
                        </div>
                        <div className="col border bg-ef">
                            <div className="row w-100">
                                <div className="row flex-left">sender</div>
                                <div className="row flex-right">00:00:00</div>
                            </div>
                            <div className="row">
                                This is the notification.
                            </div>
                        </div>
                        <div className="col border">
                            <div className="row w-100">
                                <div className="row flex-left">sender</div>
                                <div className="row flex-right">00:00:00</div>
                            </div>
                            <div className="row">
                                This is the notification.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
