import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import PromptsContainer from './containers/PromptsContainer';
import { fetchMonsters } from './actions/monsterActions'
import { fetchPersons } from './actions/personActions'
import { fetchEquipment } from './actions/equipmentActions'
import PostsContainer from './containers/PostsContainer';
import Login from './components/Login'

class App extends Component {

  componentDidMount(){
    this.props.fetchMonsters()
    this.props.fetchPersons()
    this.props.fetchEquipment()
  }
  
  render(){
    return (
      <div >
          <Login />
          If logged in: Prompts Container<br></br><br></br>
          <PromptsContainer />
          <br></br>
          <PostsContainer />
      </div>
    );
  }
}


const mapDispatchToProps = state => {
  return {
    monsters: state.monsters,
    persons: state.persons,
    equipment: state.equipment
  }
}

export default connect(mapDispatchToProps, { fetchMonsters, fetchPersons, fetchEquipment })(App);
