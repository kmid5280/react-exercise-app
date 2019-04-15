import {CURRENT_WORKOUT_FORM_SUBMIT} from './actions'

const initialState = {
    type: '',
    exercises: '',
}

export default (state = initialState, action) => {
    if (action.type === CURRENT_WORKOUT_FORM_SUBMIT) {
        return Object.assign({}, state, {
            type: action.type,
            exercises: action.exercises
        })
    }
    return state
}