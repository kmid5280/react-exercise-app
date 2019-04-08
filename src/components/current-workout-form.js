import React from 'react'
import {reduxForm, Field, SubmissionError, focus} from 'redux-form'
import { connect } from 'tls';
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
                
            </div>
        )
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(CurrentWorkoutForm)