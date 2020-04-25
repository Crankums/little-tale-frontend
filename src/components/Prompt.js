import React, { Component } from "react";
import { getPrompt, increaseIndex } from '../actions/promptActions'
// import { fetchMonsters } from "../actions/monsterActions";
// import { fetchPersons } from "../actions/personActions";
// import { fetchEquipment } from "../actions/equipmentActions";
import { connect } from 'react-redux'
import PostInput from "./posts/PostInput";

export class Prompt extends Component{

    state={
        words: []
    }

    handleClick = () => {
        let arr = this.state.words.slice()
        arr.push(
            this.props.persons.persons[0].name,
            this.props.equipment.equipment[0].name,
            this.props.monsters.monsters[0].name
        )
        this.setState(
            {words: arr}
        )
    }


    render(){
        console.log(this.state)
        // const monsters = this.props.monsters.map(mons => <li key={mons.id}>{mons.name}</li>)
        return(
            <div>
                <button onClick={this.handleClick}>Prompt!</button>
            <PostInput />
            <div>{this.state.words}</div>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    
    return { 
        persons: state.persons,
        monsters: state.monsters,
        equipment: state.equipment,
        loading: state.loading
    }
    
}




export default connect(mapStateToProps)(Prompt)