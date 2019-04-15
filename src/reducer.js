import {CURRENT_WORKOUT_FORM_SUBMIT, NEW_WORKOUT_TYPE} from './actions'

const initialState = {
    type: '',
    exercises: '',
}

export default (state = initialState, action) => {
    if (action.type === CURRENT_WORKOUT_FORM_SUBMIT) {
        return Object.assign({}, state, {
            
        })
    }
    else if (action.type === NEW_WORKOUT_TYPE) {
        return Object.assign({}, state, {
            workoutType: action.workoutType,
            exercises: action.exercises
        })
    }
    return state
}