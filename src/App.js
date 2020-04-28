import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import PromptsContainer from './containers/PromptsContainer';
// import { fetchMonsters } from './actions/monsterActions'
// import { fetchPersons } from './actions/personActions'
// import { fetchEquipment } from './actions/equipmentActions'
import PostsContainer from './containers/PostsContainer';
import { getCurrentUser } from './actions/currentUserActions';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';

class App extends Component {

  
  componentDidMount(){
    // this.props.fetchMonsters()
    // this.props.fetchPersons()
    // this.props.fetchEquipment()
    this.props.getCurrentUser()
    
  }
  
  render(){
    return (
        <div>
          <NavBar />
          <PromptsContainer />
          <PostsContainer />
          <Route exact path='/login' component={Login}/>
          <Route exact patch='/signup' component={Signup} />
          <Route /> {/* <--this on will be for profile */}
          <Route /> {/* <--show all posts */}
        </div>
    )
  }
}


// const mapStateToProps = state => {
//   return {
//     monsters: state.monsters,
//     persons: state.persons,
//     equipment: state.equipment,
//     currentUser: state.currentUser
//   }
// }

export default connect(null, { getCurrentUser })(App);
