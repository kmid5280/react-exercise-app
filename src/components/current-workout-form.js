import React from 'react'
import {reduxForm, Field, SubmissionError, focus} from 'redux-form'
const  { DOM: { input, select, textarea } } = React
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
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                <Field component={select}>
                    {workoutTypes.map((workout, index) => {
                        return <option value={workoutTypes[index].exercises}></option>
                    })}
                </Field>
                </form>
            </div>
        )
    }
}