import React, { Component } from "react";
import { connect } from 'react-redux'
import PostInput from "./posts/PostInput";
import { increaseIndex } from '../actions/promptActions'

export class Prompt extends Component{

    state={
        keywords: []
    }

    handleClick = () => {
        let arr=[
            this.props.persons.persons[this.props.persons.index].name,
            this.props.equipment.equipment[this.props.equipment.index].name,
            this.props.monsters.monsters[this.props.monsters.index].name]
            increaseIndex(this.props)
        this.setState(
            {keywords: arr}
        )
    }

    // if you can't do an elegant solution, try an inelegant one  

    render(){
        // const monsters = this.props.monsters.map(mons => <li key={mons.id}>{mons.name}</li>)
        return(
            <div> 
                <div>{this.state.keywords.map(el => `"${el}" `)}</div>
                    <button onClick={this.handleClick}>Prompt!</button>
                <PostInput />
           
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

// const mapDispatchToProps = dispatch => {
//     return{type: 'INCREASE_INDEX'}
// }


export default connect(mapStateToProps)(Prompt)