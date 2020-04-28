import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Logout from './Logout';


const NavBar = ({ currentUser }) => {
    return(
        <div className="navbar">
            {currentUser ? <Logout /> : <Login />}
            {currentUser ? ` ${currentUser.attributes.username}, tell us a little tale! ` : null}
        </div>
    )
}


const mapStateToProps = ({ currentUser}) => {
    return{
        currentUser
    }
}

export default connect(mapStateToProps)(NavBar)