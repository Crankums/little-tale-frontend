import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/LoginFormActions'
import React from 'react'

const Login = ({ loginForm, updateLoginForm}) => {

    const handleInputChange = event => {
        const {name, value }= event.target
        const updatedFormInfo = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    return (
        <form onSubmit={undefined}>
            <input placeholder='username' value={loginForm.username} name='username' type="text" onChange={handleInputChange}/>
            <input placeholder='password' value={loginForm.password} name='password' type="text" onChange={handleInputChange}/>
            <input type='submit' value="Log In"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.manageLoginForm
        // username: state.manageLoginForm.username,
        // password: state.manageLoginForm.password
    }
}

// const mapDispatchToProps = dispatch => {
    
// }

export default connect(mapStateToProps, { updateLoginForm })(Login)