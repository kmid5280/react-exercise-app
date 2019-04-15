export const CURRENT_WORKOUT_FORM_SUBMIT = 'CURRENT_WORKOUT_FORM_SUBMIT'
export const currentWorkoutFormSubmit = () => ({
    type: CURRENT_WORKOUT_FORM_SUBMIT
})

export const NEW_WORKOUT_TYPE = 'NEW_WORKOUT_TYPE'
export const newWorkoutType = (workoutType, exercises) => ({
    type: NEW_WORKOUT_TYPE,
    workoutType,
    exercises
})