import React from 'react'
import { connect } from 'tls';

export class NewWorkoutType extends React.Component {
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