import React, { Component } from "react";
// import { fetchMonsters } from "../actions/monsterActions";
// import { fetchPersons } from "../actions/personActions";
// import { fetchEquipment } from "../actions/equipmentActions";
import { connect } from 'react-redux'
import PostInput from "./posts/PostInput";

export class Prompt extends Component{

    // constructor(props){
    //     super(props)
    // }
    state={
        words: []
    }
    // const {monsters} = this.props
    // handleClick = () => {
    //     this.props.fetchMonsters()
        
    // }

        // fetchEquipment()
        // fetchPersons()  

    render(){
        // const monsters = this.props.monsters.map(mons => <li key={mons.id}>{mons.name}</li>)
        return(
            <div>
                <button>Prompt!</button>
            <PostInput />
            <div>{this.state.words}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return { 
        persons: state.persons,
        monsters: state.monsters,
        equipment: state.equipment,
        loading: state.loading
    }
}

// const mapDispatchToProps = dispatch => {
//     return{ fetchMonsters: ()=> dispatch(fetchMonsters())}
// }

export default connect(mapStateToProps)(Prompt)