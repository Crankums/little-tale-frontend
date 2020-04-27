import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/LoginFormActions'
import React from 'react'
import {login} from "../actions/currentUserActions.js"

const Login = ({ loginFormData, updateLoginForm}) => {

    const handleInputChange = event => {
        const {name, value }= event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        login(loginFormData)

    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input placeholder='username' value={loginFormData.username} name='username' type="text" onChange={handleInputChange}/>
            <input placeholder='password' value={loginFormData.password} name='password' type="text" onChange={handleInputChange}/>
            <input type='submit' value="Log In"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.manageLoginForm
        // username: state.manageLoginForm.username,
        // password: state.manageLoginForm.password
    }
}

// const mapDispatchToProps = dispatch => {
    
// }

export default connect(mapStateToProps, { updateLoginForm, login })(Login)