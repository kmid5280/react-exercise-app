import React from 'react'
import requiresLogin from './requires-login';
import {connect} from 'react-redux'
import {logout} from '../actions/auth'

export class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <h1>Dashboard placeholder</h1>
                <button onClick={() => this.props.dispatch(logout())}>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    authToken: state.auth.authToken,
    username: state.auth.currentUser ? state.auth.currentUser.username : '',
})

export default requiresLogin()(connect(mapStateToProps)(Dashboard))