// synchronous actions 

import { setCurrentUser } from "./currentUserActions"

export const updateSignupForm = formData => {
    return {
        type: "UPDATE_SIGNUP_FORM",
        formData
    }
}

export const resetSignupForm = () => {
    return {
        type: 'RESET_SIGNUP_FORM'
    }
}


// asynchronous actions

export const signup = credentials => {
    return dispatch => {
        return fetch('http://localhost3001/api/v1/signup', {
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                alert(res.error) 
            } else {
                dispatch(setCurrentUser(res.data))
                dispatch(resetSignupForm)
            }
        })
    }
}