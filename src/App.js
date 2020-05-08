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
// import { Posts } from './components/posts/Posts';

class App extends Component {

  
  componentDidMount(){
    this.props.getCurrentUser()
  }
  
  render(){
    const loggedIn = this.props.loggedIn
    return (
        <div className="app-container">
          <NavBar />
          {/* check loggedIn status before rendering switch */}
        <Switch>
          <Route path="/login">{loggedIn ? <Redirect to="/"/> : <Login />}</Route>
          <Route path="/signup">{loggedIn ? <Redirect to="/"/> : <Signup />}</Route>
          <Route path='/posts'> {loggedIn ? <PostsContainer posts={this.props.posts}/> : <Redirect to='/'/>}</Route>
          <Route path='/about'>{loggedIn ? <About />: <Redirect to="/"/>  }</Route>
          <Route /> {/* <--show all posts */}
        </Switch>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser,
    posts: state.posts 
  }
}


export default connect(mapStateToProps, { getCurrentUser })(App);
