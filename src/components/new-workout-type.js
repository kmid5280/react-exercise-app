import React from 'react'
import { connect } from 'react-redux';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form'
import {newWorkoutType} from '../actions'

export class NewWorkoutType extends React.Component {
    onSubmit(values) {
        const {userId, type, exercises} = values
        return this.props.dispatch(newWorkoutType(values))
        .catch(err => {
            console.log({_error: err.errors._error})
            throw new SubmissionError({_error: err.errors._error})
        })
    }
    
    render() {
        return (
            <div>
                <p>This page will contain a form to submit a new workout type.</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    
})

export default connect()(mapStateToProps)(NewWorkoutType)