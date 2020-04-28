import { connect } from 'react-redux'
import React from 'react'
import { updateSignupForm, signup } from "../actions/userActions.js"

const Signup = ({ signupFormData, updateSignupForm, signup }) => {

    const handleInputChange = event => {
        const {name, value }= event.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        signup(signupFormData)

    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input placeholder='username' value={signupFormData.username} name='username' type="text" onChange={handleInputChange}/>
            <input placeholder='password' value={signupFormData.password} name='password' type="text" onChange={handleInputChange}/>
            <input placeholder='email' value={signupFormData.password} name='email' type="text" onChange={handleInputChange}/>         
            <input type='submit' value="Log In"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.users
        
    }
}


export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)