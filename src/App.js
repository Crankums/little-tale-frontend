import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Prompt from './components/Prompt';
import { fetchMonsters } from './actions/monsterActions'
import {fetchPersons} from './actions/personActions'
import { fetchEquipment } from './actions/equipmentActions'
import PostsContainer from './containers/PostsContainer';

class App extends Component {

  componentDidMount(){
    this.props.fetchMonsters()
    this.props.fetchPersons()
    this.props.fetchEquipment()
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          NavBar <br></br><br></br>
          Login <br></br><br></br>
          If logged in: Prompts Container<br></br><br></br>
          <Prompt />
          <br></br>
          <PostsContainer />
          </header>
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
