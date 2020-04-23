import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Prompt } from './components/Prompt';

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          NavBar <br></br><br></br>
          Login <br></br><br></br>
          If logged in: Prompts Container<br></br><br></br>
          <Prompt />
          Posts Container<br></br>
        </header>
      </div>
    );
  }
}
export default App;
