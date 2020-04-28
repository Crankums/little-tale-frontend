import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import PromptsContainer from './containers/PromptsContainer';
import { fetchMonsters } from './actions/monsterActions'
import { fetchPersons } from './actions/personActions'
import { fetchEquipment } from './actions/equipmentActions'
import PostsContainer from './containers/PostsContainer';
import Login from './components/Login'
import { getCurrentUser } from './actions/currentUserActions';
import Logout from './components/Logout';

class App extends Component {

  componentDidMount(){
    this.props.fetchMonsters()
    this.props.fetchPersons()
    this.props.fetchEquipment()
    this.props.getCurrentUser()
    
  }
  
  render(){
    return (
      <div>
          <Login />  
          <Logout />
          <br></br>
          <PromptsContainer /> : <h2>log in to see prompts</h2>
          <PostsContainer />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    monsters: state.monsters,
    persons: state.persons,
    equipment: state.equipment,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { fetchMonsters, fetchPersons, fetchEquipment, getCurrentUser})(App);
