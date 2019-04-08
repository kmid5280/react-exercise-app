import React from 'react'
import requiresLogin from './requires-login';
import {connect} from 'react-redux'
import {logout} from '../actions/auth'
import CurrentWorkoutForm from './current-workout-form'
import PastWorkouts from './past-workouts'
import {Redirect} from 'react-router-dom'


export class Dashboard extends React.Component {


    render() {
        if (!this.props.loggedIn) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <h1>Dashboard placeholder</h1>
                <CurrentWorkoutForm />
                <PastWorkouts />
                <button onClick={() => this.props.dispatch(logout())}>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: !!state.auth.currentUser,
    authToken: state.auth.authToken,
    username: state.auth.currentUser ? state.auth.currentUser.username : '',
    userId: state.auth.currentUser ? state.auth.currentUser.id : ''
})

export default requiresLogin()(connect(mapStateToProps)(Dashboard))