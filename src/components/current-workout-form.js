import React from 'react'
import {reduxForm, Field, SubmissionError, focus} from 'redux-form'
import { connect } from 'react-redux';

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
