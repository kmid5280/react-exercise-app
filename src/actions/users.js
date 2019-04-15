import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const POST_NEW_WORKOUT_TYPE = 'POST_NEW_WORKOUT_TYPE'
export const postNewWorkoutType = (user, workoutType, exercises) => ({
    type: POST_NEW_WORKOUT_TYPE,
    user,
    workoutType,
    exercises
})

export const registerUser = user => dispatch => {
    
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            
            const {code, reason, message, location} = err;
            if (reason === 'ValidationError') {
                console.log(code)
                
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        _error: message
                        
                    })
                );
            }
        });
};

export const newWorkoutType = (userId, authToken, workoutType, exercises) => dispatch => {
    const reqBody = {workoutType: workoutType, exercises: exercises}

    return fetch(`${API_BASE_URL}/users/${userId}`, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        },
        body: JSON.stringify(reqBody)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(user => {
        dispatch(postNewWorkoutType(user, workoutType, exercises))
    })
    .catch(err => {
        const {reason, message, location} = err;
        console.log(err)
        if (reason === 'ValidationError') {
            return Promise.reject(
                new SubmissionError({
                    [location]: message
                })
            )
        }
    })
}