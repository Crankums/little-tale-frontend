export const setCurrenUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}
// asynchonous action creators
export const login = credentials => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/login',{
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(res => res.json())
            .then(user => {
                if (user.error){
                    alert(user.error)
                } else {
                    dispatch(setCurrenUser(user))
                }
            })
            .catch(console.log)
    }
}

export const getCurrentUser = credentials => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/get_current_user',{
            credentials: 'include',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(res => res.json())
            .then(user => {
                if (user.error){
                    alert(user.error)
                } else {
                    dispatch(setCurrenUser(user.data))
                    console.log(`${user.data.attributes.username} is currently logged in`)
                }
            })
            .catch(console.log)
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch('http://localhost:3001/api/v1/logout', {
            credentials: "include",
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}