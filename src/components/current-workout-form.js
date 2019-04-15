import React from 'react'
import {reduxForm, Field, SubmissionError, focus} from 'redux-form'
import { connect } from 'react-redux';
import {currentWorkoutFormSubmit} from '../actions'

const workoutTypes = [      //sample workout types, will be user defined and pulled from database
    {
        type: 'Cardio',
        exercises: 'Running, biking, hiking'
    },
    {
        type: 'Weights, arms',
        exercises: 'Freeweights, machines'
    },
    {
        type: 'Weights, legs',
        exercises: 'Freeweights, machines'
    }
]

export class CurrentWorkoutForm extends React.Component {
    onSubmit(values) {
        const {userId, type, exercises} = values
        return this.props.dispatch(currentWorkoutFormSubmit(values))
        .catch(err => {
            console.log({_error: err.errors._error})
            throw new SubmissionError({_error: err.errors._error})
        })
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div aria-live='polite'>
                    {this.props.error}
                </div>
            )
        }
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                <Field component='select'>
                    {workoutTypes.map((workout, index) => {
                        return <option value={workoutTypes[index].exercises}></option>
                    })}
                </Field>
                </form>
            </div>
        )
    }
    
}
