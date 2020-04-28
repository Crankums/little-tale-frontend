import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import PromptsContainer from './containers/PromptsContainer';

import PostsContainer from './containers/PostsContainer';
import { getCurrentUser } from './actions/currentUserActions';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';

class App extends Component {

  
  componentDidMount(){
    this.props.getCurrentUser()
  }
  
  render(){
    return (
        <div>
          <NavBar />
          <PromptsContainer />
          <PostsContainer />
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup} />
          <Route /> {/* <--this on will be for profile */}
          <Route /> {/* <--show all posts */}
        </Switch>
        </div>
    )
  }
}




export default connect(null, { getCurrentUser })(App);
