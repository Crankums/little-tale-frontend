import { connect } from 'react-redux'
import React from 'react'
import {logout} from "../actions/currentUserActions.js"

const Login = ({ logout }) => {
    return (
        <form onSubmit={logout}>
            <input type='submit' value="Log Out"/>
        </form>
    )
}

export default connect(null, { logout })(Login)