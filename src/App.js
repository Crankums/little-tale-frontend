import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import PostsContainer from './containers/PostsContainer';
import { getCurrentUser } from './actions/currentUserActions';
import NavBar from './components/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/AboutPage'

class App extends Component {

  
  componentDidMount(){
    this.props.getCurrentUser()
  }
  
  render(){
    const loggedIn = this.props.loggedIn
    return (
        <div className="app-container">
          <NavBar />
          
        <Switch>
          <Route exact path="/login">{loggedIn ? <Redirect to="/"/> : <Login />}</Route>
          <Route exact path="/signup">{loggedIn ? <Redirect to="/"/> : <Signup />}</Route>
    <Route exact path='/posts'> {loggedIn ? <PostsContainer /> : <Redirect to='/'/>}</Route>
          <Route exact path='/about'>{loggedIn ? <About />: <Redirect to="/"/>  }</Route>
          <Route /> {/* <--show all posts */}
        </Switch>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser
  }
}


export default connect(mapStateToProps, { getCurrentUser })(App);
