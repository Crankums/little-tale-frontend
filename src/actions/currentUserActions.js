export const setCurrenUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}


// asynchonous action creators
export const login = credentials => {
    return dispath => {
        return fetch('http://localhost:3001/api/v1/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'applications/json'
            },
            body: JSON.stringify()
        })
    }
}