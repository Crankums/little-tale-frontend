const initialState = {
    username: "",
    password: "",
    email:""
}

export default function manageUsers(state= initialState, action) {
    switch(action.type){
        case 'UPDATE_SIGNUP_FORM':
            return action.formData
        case 'RESET_SIGNUP_FORM':
            return {}
        default:
            return state
    }
}