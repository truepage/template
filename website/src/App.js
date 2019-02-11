import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import ViewDoc from './components/docs/ViewDoc';
import Postbox from './components/postbox/Postbox';
import Inbox from './components/postbox/Inbox';
import Outbox from './components/postbox/Outbox';
import Notifications from './components/notifications/Notifications';
import OrgStudio from './components/orgs/OrgStudio';
import DocStudio from './components/docs/DocStudio';

class App extends Component {
	render() {
		return (
			<Router>
			<div className="App">
				<Navbar/>
				<Route exact path="/" component={Landing}/>
				<Route exact path="/login" component={Login}/>
				<Route exact path="/dashboard" component={Dashboard}/>
				<Route exact path="/docs/view/:id" component={ViewDoc}/>
				<Route exact path="/postbox" component={Postbox}/>
				<Route exact path="/postbox/inbox" component={Inbox}/>
				<Route exact path="/postbox/outbox" component={Outbox}/>
				<Route exact path="/notifications" component={Notifications}/>
				<Route exact path="/doc-studio" component={DocStudio}/>
				<Route exact path="/org-studio" component={OrgStudio}/>
				<Footer/>
			</div>
			</Router>
		);
	}
}

export default App;
