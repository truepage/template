import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';

import Login from './components/auth/Login';

import Dashboard from './components/dashboard/Dashboard';

import OrgStudio from './components/orgs/OrgStudio';

class App extends Component {
	render() {
		return (
			<Router>
			<div className="App">
				<Navbar/>
				<Route exact path="/" component={Landing}/>
				<Route exact path="/login" component={Login}/>
				<Route exact path="/dashboard" component={Dashboard}/>
				<Route exact path="/org-studio" component={OrgStudio}/>
				<Footer/>
			</div>
			</Router>
		);
	}
}

export default App;
