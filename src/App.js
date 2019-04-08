import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import LandingPage from './components/landing-page'
import Header from './components/header'
import {refreshAuthToken} from './actions/auth'
import Dashboard from './components/dashboard'
import Login from './components/login'
import Signup from './components/signup'

export class App extends React.Component {
  
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.startPeriodicRefresh()
    }
    else if (prevProps.loggedIn && !this.props.loggedIn) {
      this.stopPeriodicRefresh()
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60*60*1000
    )
  }
  
  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return
    }
    clearInterval(this.refreshInterval)
  }
  
  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <header>
            <Header />
          </header>
          <main>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/dashboard' component={Dashboard} />
          </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(App);
