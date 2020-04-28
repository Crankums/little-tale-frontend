import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Logout from './Logout';


const NavBar = ({ currentUser }) => {
    console.log(currentUser)
    return(
        <div className="navbar">
            
            {currentUser ? <p><Logout /> </p>: <Login />}
            {currentUser ? `${currentUser.data.attributes.username}, tell use a little tale!` : null}
        </div>
    )
}


const mapStateToProps = ({ currentUser}) => {
    return{
        currentUser
    }
}

export default connect(mapStateToProps)(NavBar)