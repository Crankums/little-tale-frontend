import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Logout from './Logout';
import { Link } from 'react-router-dom'


const NavBar = ({ currentUser }) => {
    return(
        <div className="navbar">
            {currentUser ? <Logout /> : <Login />}
            {currentUser ? ` ${currentUser.attributes.username}, tell us a little tale! ` : null}
            <Link to='/'> Home </Link>
            <Link to='/about'>About</Link>
            <Link to='/posts'>Posts and Prompts!</Link>
        </div>
    )
}


const mapStateToProps = ({ currentUser}) => {
    return{
        currentUser
    }
}

export default connect(mapStateToProps)(NavBar)