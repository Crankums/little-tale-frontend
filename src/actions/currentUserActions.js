export const setCurrenUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}


// asynchonous action creators
export const login = credentials => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/login',{
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
                    dispatch(setCurrenUser(user))
                }
            })
            .catch(console.log)
    }
}