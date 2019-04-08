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

export default function CurrentWorkoutForm() {

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
